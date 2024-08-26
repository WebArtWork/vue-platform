import { Component } from '@angular/core';
import { FormService } from 'src/app/core/modules/form/form.service';
import {
	CustomformService,
	Customform
} from '../../services/customform.service';
import { AlertService } from 'wacom';
import { TranslateService } from 'src/app/core/modules/translate/translate.service';
import { FormInterface } from 'src/app/core/modules/form/interfaces/form.interface';
import { FormComponentInterface } from 'src/app/core/modules/form/interfaces/component.interface';

@Component({
	templateUrl: './customforms.component.html',
	styleUrls: ['./customforms.component.scss']
})
export class CustomformsComponent {
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
				.modal<Customform>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this._fs.create(created as Customform, {
							callback: close.bind(this)
						});
					}
				})
				.then(this._fs.create.bind(this));
		},
		update: (form: Customform) => {
			this._form
				.modal<Customform>(
					this.form,
					{
						label: 'Update',
						click: (updated: unknown, close: () => void) => {
							this._fs.update(updated as Customform, {
								callback: close.bind(this)
							});
						}
					},
					form
				)
				.then(this._fs.update.bind(this));
		},
		delete: (form: Customform) => {
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
							this._fs.delete(form);
						}
					}
				]
			});
		},
		buttons: [
			{
				icon: 'text_fields',
				click: (doc: Customform) => {
					this.components.splice(0, this.components.length);

					const submition: Record<string, unknown> = {
						addComponent: 'Text'
					};

					doc.components = doc.components || [];

					for (let i = 0; i < doc.components.length; i++) {
						submition['key' + i] = doc.components[i].key as string;

						for (const field of doc.components[i].fields) {
							submition[field.name + i] = field.value;
						}
					}

					const remove = (i: number) => {
						this.components.splice(i, 1);

						doc.components.splice(i, 1);

						this._fs.updateAfterWhile(doc);
					};

					(doc.components || []).forEach((component) => {
						this.components.push(
							this._addCustomComponent(
								component.name,
								component.fields?.map((f) => f.name),
								this.components.length,
								remove
							)
						);
					});

					this._form
						.modal<Customform>(
							this.formComponents,
							{
								label: 'Add component',
								click: () => {
									const fields = this._form.components.find(
										(c) =>
											c.name === submition['addComponent']
									)?.fields as string[];

									this.components.push(
										this._addCustomComponent(
											submition['addComponent'] as string,
											fields,
											this.components.length,
											remove
										)
									);

									doc.components.push({
										name: submition[
											'addComponent'
										] as string,
										fields: fields.map((name) => {
											return {
												value: '',
												name
											};
										})
									});
								}
							},
							submition,
							() => {},
							{ size: 'big' }
						)
						.then(() => {
							for (let i = 0; i < doc.components.length; i++) {
								doc.components[i].key = submition[
									'key' + i
								] as string;

								for (const field of doc.components[i].fields) {
									field.value = submition[
										field.name + i
									] as string;
								}
							}

							this._fs.updateAfterWhile(doc);
						});
				}
			}
		]
	};

	get rows(): FormInterface[] {
		return this._form.customForms;
	}

	constructor(
		private _translate: TranslateService,
		private _fs: CustomformService,
		private _alert: AlertService,
		private _form: FormService
	) {}

	private _addCustomComponent(
		component: string,
		fields: string[],
		index: number,
		remove: (i: number) => void
	): FormComponentInterface {
		const components = [
			{
				name: 'Text',
				key: 'key' + index,
				root: true,
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
			// ...(fields || [])?.map((f) => {
			// 	return {
			// 		name:
			// 			this._form.customFieldComponent[component + f] ||
			// 			'Text',
			// 		key: f + index,
			// 		root: true,
			// 		fields: [
			// 			{
			// 				name: 'Placeholder',
			// 				value: 'fill ' + f
			// 			},
			// 			{
			// 				name: 'Label',
			// 				value:
			// 					f.charAt(0).toUpperCase() + f.slice(1, f.length)
			// 			}
			// 		]
			// 	};
			// }),
			{
				name: 'Button',
				fields: [
					{
						name: 'Label',
						value: 'Remove'
					},
					{
						name: 'Click',
						value: () => {
							remove(index);
						}
					}
				]
			}
		];

		return {
			class: 'd-f mt10',
			components
		};
	}

	changeStatus(form: Customform) {
		setTimeout(() => {
			if (form.active) {
				for (const _form of this._fs.customforms) {
					if (_form._id === form._id || _form.formId !== form.formId)
						continue;

					if (_form.active) {
						_form.active = false;

						this._fs.updateAfterWhile(_form);
					}
				}
			}

			this._fs.updateAfterWhile(form);
		});
	}
}
