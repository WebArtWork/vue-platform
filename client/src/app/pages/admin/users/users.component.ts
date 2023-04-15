import { Component } from '@angular/core';
import { User } from 'src/app/core';
import { UserService } from 'src/app/core';
import { FormService } from 'src/app/modules/form/form.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { AlertService, CoreService } from 'wacom';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent {
	form: FormInterface = this._form.getForm('user');

	config = {
		create: () => {
			this._form
				.modal<User>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this.us.create(created as User);
						close();
					}
				})
				.then(this.us.create.bind(this));
		},
		update: (doc: User) => {
			this._form.modal<User>(this.form, [], doc).then((updated: User) => {
				this._core.copy(updated, doc);
				this.us.save(doc);
			});
		},
		delete: (user: User) => {
			this._alert.question({
				text: 'Are you sure you want to delete this user?',
				buttons: [
					{
						text: 'No'
					},
					{
						text: 'Yes',
						callback: () => {
							this.us.delete(user);
						}
					}
				]
			});
		}
	};

	columns = ['name', 'email'];

	constructor(
		private _form: FormService,
		public us: UserService,
		private _alert: AlertService,
		private _core: CoreService
	) {
		for (const role of this.us.roles) {
			this.columns.push(role);
		}
	}
}
