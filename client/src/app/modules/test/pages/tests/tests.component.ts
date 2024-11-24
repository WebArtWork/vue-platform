import { Component } from '@angular/core';
import { AlertService, CoreService } from 'wacom';
import { TestService } from '../../services/test.service';
import { Test } from '../../interfaces/test.interface';
import { FormService } from 'src/app/core/modules/form/form.service';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { testFormComponents } from '../../formcomponents/test.formcomponents';
import { firstValueFrom } from 'rxjs';

@Component({
	templateUrl: './tests.component.html',
	styleUrls: ['./tests.component.scss'],
	standalone: false
})
export class TestsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('test', testFormComponents);

	config = {
		paginate: this.setRows.bind(this),
		perPage: 20,
		setPerPage: this._testService.setPerPage.bind(this._testService),
		allDocs: false,
		create: (): void => {
			this._form.modal<Test>(this.form, {
				label: 'Create',
				click: async (created: unknown, close: () => void) => {
					close();

					await firstValueFrom(
						this._testService.create(created as Test)
					);

					this.setRows();
				}
			});
		},
		update: (doc: Test): void => {
			this._form.modal<Test>(this.form, [], doc).then((updated: Test) => {
				this._core.copy(updated, doc);

				this._testService.update(doc);
			});
		},
		delete: (doc: Test): void => {
			this._alert.question({
				text: this._translate.translate(
					'Common.Are you sure you want to delete this test?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: async (): Promise<void> => {
							await firstValueFrom(this._testService.delete(doc));

							this.setRows();
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'cloud_download',
				click: (doc: Test): void => {
					this._form.modalUnique<Test>('test', 'url', doc);
				}
			}
		],
		headerButtons: [
			{
				icon: 'playlist_add',
				click: this._bulkManagement(),
				class: 'playlist',
			},
			{
				icon: 'edit_note',
				click: this._bulkManagement(false),
				class: 'edit',
			},
		]
	};

	rows: Test[] = [];

	constructor(
		private _translate: TranslateService,
		private _testService: TestService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService
	) {
		this.setRows();
	}

	setRows(page = this._page): void {
		this._page = page;

		this._core.afterWhile(
			this,
			() => {
				this._testService.get({ page }).subscribe((rows) => {
					this.rows.splice(0, this.rows.length);

					this.rows.push(...rows);
				});
			},
			250
		);
	}

	private _page = 1;

	private _bulkManagement(create = true): () => void {
		return (): void => {
			this._form
				.modalDocs<Test>(create ? [] : this.rows)
				.then(async (tests: Test[]) => {
					if (create) {
						for (const test of tests) {
							await firstValueFrom(
								this._testService.create(test)
							);
						}
					} else {
						for (const test of this.rows) {
							const localTest = tests.find(
								localTest => localTest._id === test._id
							);

							if (localTest) {
								this._core.copy(test, localTest);

								await firstValueFrom(
									this._testService.update(localTest)
								);
							} else {
								await firstValueFrom(
									this._testService.delete(test)
								);
							}
						}
					}

					this.setRows();
				});
		};
	}
}
