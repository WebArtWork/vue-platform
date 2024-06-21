import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';
import { FormInterface } from '../../interfaces/form.interface';
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService } from 'src/app/modules/alert/alert.service';

@Component({
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})
export class FormsComponent {
	columns = ['title', 'components', 'formId', 'active'];
	form: FormInterface = this._form.getForm('form', {
		formId: 'form',
		title: 'Custom form',
		components: [
			{
				name: 'Text',
				key: 'title',
				focused: true,
				fields: [
					{
						name: 'Placeholder',
						value: 'fill title'
					},
					{
						name: 'Label',
						value: 'Title'
					}
				]
			},
			{
				name: 'Select',
				key: 'formId',
				fields: [
					{
						name: 'Placeholder',
						value: 'Select form id'
					},
					{
						name: 'Label',
						value: 'Form ID'
					},
					{
						name: 'Items',
						value: this._form.formIds
					}
				]
			}
		]
	});
	formComponents: FormInterface = this._form.getForm('formComponents', {
		formId: 'formComponents',
		title: 'Custom components',
		components: [
			{
				name: 'Button',
				fields: [
					{
						name: 'Label',
						value: 'Add component'
					},
					{
						name: "Click",
						value: () => {
							console.log('clicked');
						}
					}
				]
			}
		]
	});


	config = {
		create: () => {
			this._form
				.modal<FormInterface>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this._form.create(
							created as FormInterface,
							close.bind(this)
						);
					}
				})
				.then(this._form.create.bind(this));
		},
		update: (form: FormInterface) => {
			this._form
				.modal<FormInterface>(
					this.form,
					{
						label: 'Update',
						click: (updated: unknown, close: () => void) => {
							this._form.update(
								updated as FormInterface,
								close.bind(this)
							);
						}
					},
					form
				)
				.then(this._form.update.bind(this));
		},
		delete: (form: FormInterface) => {
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
						callback: () => {
							this._form.delete(form);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'text_fields',
				click: (doc: FormInterface) => {
					console.log(doc);
					this._form
						.modal<FormInterface>(
							this.formComponents,
							{
								label: 'Update',
								click: (updated: unknown, close: () => void) => {
									console.log(updated);
								}
							}
						)
						.then(this._form.update.bind(this));
				}
			}
		]
	};

	get rows(): FormInterface[] {
		return this._form.customForms;
	}

	changeStatus(form: FormInterface) {
		setTimeout(() => {
			if (form.active) {
				for (const _form of this._form.customForms) {
					if (_form._id === form._id || _form.formId !== form.formId)
						continue;

					if (_form.active) {
						_form.active = false;

						this._form.save(_form);
					}
				}
			}

			this._form.save(form);
		});
	}

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService
	) {}
}
