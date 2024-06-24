import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';
import { FormInterface } from '../../interfaces/form.interface';
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService } from 'src/app/modules/alert/alert.service';
import { FormComponentInterface } from '../../interfaces/component.interface';

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
	components: FormComponentInterface[] = [];
	formComponents: FormInterface = this._form.getForm('formComponents', {
		formId: 'formComponents',
		title: 'Custom components',
		components: [
			{
				components: this.components
			},
			{
				name: 'Select',
				key: 'addComponent',
				fields: [
					{
						name: 'Placeholder',
						value: 'Select form componnet'
					},
					{
						name: 'Label',
						value: 'Form Component'
					},
					{
						name: 'Value',
						value: 'name',
						skipTranslation: true
					},
					{
						name: 'Items',
						value: this._form.components
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
					console.clear();
					console.log(doc);
					this.components.splice(0, this.components.length);
					const submition: Record<string, unknown> = {
						addComponent: 'Text',
						data: {}
					};
					(doc.components || []).forEach((component, index) => {
						// submition.data['key' + index] = ''
						this.components.push(
							this._addCustomComponent(
								component.name as string,
								component.fields?.map(
									(f) => f.name
								) as string[],
								this.components.length
							)
						);
					});
					this._form.modal<FormInterface>(
						this.formComponents,
						{
							label: 'Add component',
							click: () => {
								this.components.push(
									this._addCustomComponent(
										submition['addComponent'] as string,
										this._form.components.find(
											(c) =>
												c.name ===
												submition['addComponent']
										)?.fields as string[],
										this.components.length
									)
								);
								doc.components.push({
									name: submition['addComponent'] as string,
								});
							}
						},
						submition,
						() => {},
						{ size: 'big' }
					).then(() => {
						console.log(submition, doc);
						// this._form.save(doc);
					});;
				}
			}
		]
	};

	get rows(): FormInterface[] {
		return this._form.customForms;
	}

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService
	) {}

	private _addCustomComponent(
		component: string,
		fields: string[],
		index: number
	): FormComponentInterface {
		const components = [
			{
				name: 'Text',
				key: 'key' + index,
				fields: [
					{
						name: 'Placeholder',
						value: 'fill key'
					},
					{
						name: 'Label',
						value: 'Key'
					}
				]
			},
			...(fields || [])?.map((f) => {
				return {
					name: 'Text',
					key: f + index,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill ' + f
						},
						{
							name: 'Label',
							value:
								f.charAt(0).toUpperCase() + f.slice(1, f.length)
						}
					]
				};
			})
		];
		return {
			class: 'd-f mt10',
			components
		};
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
}
