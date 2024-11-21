import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { AlertService, CoreService } from 'wacom';
import { User } from '../../interfaces/user.interface';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss'],
    standalone: false
})
export class UsersComponent {
	form: FormInterface = this._form.getForm('user');

	formUserBulk: FormInterface = {
		title: 'Modify content of documents',
		components: [
			{
				name: 'Text',
				key: 'docs',
				fields: [
					{
						name: 'Textarea',
						value: true
					},
					{
						name: 'Placeholder',
						value: 'fill content of documents'
					},
				]
			}
		]
	};

	config = {
		create: (): void => {
			this._form
				.modal<User>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this._us.create(created as User, {
							alert: 'User has been created',
							callback: close.bind(this)
						});
					}
				})
				.then(this._us.create.bind(this));
		},
		update: (doc: User): void => {
			this._form.modal<User>(this.form, [], doc).then((updated: User) => {
				this._core.copy(updated, doc);

				this._us.update(doc, {
					alert: 'User has been updated'
				});
			});
		},
		delete: (user: User): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this user?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: (): void => {
							this._us.delete(user, {
								name: 'admin',
								alert: 'User has been deleted',
								callback: () => {
									// this.setUsers();
								}
							});
						}
					}
				]
			});
		},
		headerButtons: [
			{
				icon: 'edit_note',
				click: this._bulkManagement(false)
			},
			{
				icon: 'playlist_add',
				click: this._bulkManagement()
			}
		]
	};

	columns = ['name', 'email'];

	get roles(): string[] {
		return this._us.roles;
	}

	get users(): User[] {
		return this._us.users;
	}

	constructor(
		private _translate: TranslateService,
		private _us: UserService,
		private _form: FormService,
		private _alert: AlertService,
		private _core: CoreService
	) {
		for (const role of this._us.roles) {
			this.columns.push(role);
		}
	}

	update(user: User): void {
		this._us.updateAdmin(user);
	}

	private _bulkManagement(create = true): ()=>void {
		return (): void => {
			this._form.modal(this.formUserBulk, [], {
				docs: create ? '' : JSON.stringify(this.users)
			}).then((resp: unknown) => {
				const users = JSON.parse((resp as {docs: string}).docs);

				for (const user of users) {
					if (create) {
						this._us.create(user);
					} else {
						this._us.update(user);
					}
				}
			});
		}
	}
}
