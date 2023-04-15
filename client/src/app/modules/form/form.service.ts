import { Directive, TemplateRef, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { AlertService, ModalService, MongoService, StoreService } from 'wacom';
import {
	FormComponentInterface,
	TemplateComponentInterface
} from './interfaces/component.interface';
import { FormInterface } from './interfaces/form.interface';
import { ModalFormComponent } from './modals/modal-form/modal-form.component';

export interface FormModalButton {
	click: (submition: unknown, close: ()=>void) => void,
	label: string,
	class?: string
}

@Injectable({
	providedIn: 'root'
})
export class FormService {
	constructor(
		private _modal: ModalService,
		private _mongo: MongoService,
		private _store: StoreService,
		private _alert: AlertService
	) {
		this.customForms = _mongo.get('form', {}, (arr: any, obj: any) => {
			this._forms = obj;

			for (const form of this.customForms) {
				for (const component of form.components) {
					this.addRef(component);
				}
			}
		});

		this._store.getJson('formIds', (formIds: string[]) => {
			this.formIds = formIds || [];
		});
	}

	components: TemplateComponentInterface[] = [];

	addComponent(component: TemplateComponentInterface) {
		if (this.components.map((c) => c.name).indexOf(component.name) === -1) {
			this.components.push(component);
		} else {
			throw 'Component name is unique';
		}
	}

	getComponent(name: string) {
		const index = this.components.map((c) => c.name).indexOf(name);

		return index === -1 ? null : this.components[index];
	}

	getCustomComponent(name: string) {
		const index = this.components.map((c) => c.name).indexOf(name);

		return index === -1
			? null
			: {
					templateRef: this.components[index].ref,
					components: [],
					fields: [],
					name
			  };
	}

	inited = false;

	addRef(component: FormComponentInterface): void {
		if (this.inited) {
			if (!Array.isArray(component.fields)) {
				component.fields = [];
			}

			if (component.name) {
				const index = this.components
					.map((c) => c.name)
					.indexOf(component.name);

				if (index === -1) {
					console.error(
						`Component ${component.name} is not configured`
					);

					return;
				}

				component.templateRef = this.components[index].ref;

				for (const field of this.components[index].fields) {
					if (
						component.fields.map((f) => f.name).indexOf(field) ===
						-1
					) {
						component.fields.push({
							name: field,
							value: ''
						});
					}
				}

				for (const field of component.fields) {
					if (
						this.components[index].fields.indexOf(field.name) === -1
					) {
						const i = component.fields
							.map((f) => f.name)
							.indexOf(field.name);

						component.fields.splice(i, 1);
					}
				}
			}

			if (Array.isArray(component.components)) {
				for (const comp of component.components) {
					this.addRef(comp);
				}
			}
		} else {
			setTimeout(() => {
				this.addRef(component);
			}, 500);
		}
	}

	forms: FormInterface[] = [];

	addForm(form: FormInterface) {
		if (this.forms.map((c) => c.formId).indexOf(form.formId) === -1) {
			for (const component of form.components) {
				this.addRef(component);
			}

			this.forms.push(form);
		} else {
			throw 'Form id is unique';
		}
	}

	getDefaultForm(id: string): FormInterface {
		const form = {
			id,
			components: [
				{
					name: 'Text',
					key: 'name',
					focused: true,
					root: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your name'
						},
						{
							name: 'Label',
							value: 'name'
						}
					]
				},
				{
					name: 'Text',
					key: 'description',
					root: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your description'
						},
						{
							name: 'Label',
							value: 'Description'
						}
					]
				}
			]
		};

		for (const component of form.components) {
			this.addRef(component);
		}

		return form;
	}

	formIds: string[] = [];

	getForm(formId: string): FormInterface {
		if (this.formIds.indexOf(formId) === -1) {
			this.formIds.push(formId);

			this._store.setJson('formIds', this.formIds);
		}

		const customForm = this.customForms.find(
			(f) => f.formId === formId && f.active
		);

		const form = this.forms.find((f) => f.formId === formId);

		return customForm || form || this.getDefaultForm(formId);
	}

	modal<T>(
		form: FormInterface | FormInterface[],
		buttons: FormModalButton | FormModalButton[] = [],
		submition: unknown = {},
		change = (doc: T) => {}
	): Promise<T> {
		return new Promise((resolve, reject) => {
			this._modal.show({
				component: ModalFormComponent,
				class: 'forms_modal',
				form,
				buttons: Array.isArray(buttons) ? buttons : [buttons],
				submition,
				onClose: reject.bind(this),
				submit: resolve.bind(this),
				change: change.bind(this)
			});
		});
	}

	customForms: FormInterface[] = [];

	_forms: any = {};

	new(): FormInterface {
		return {
			_id: '',
			title: '',
			class: '',
			components: []
		};
	}

	create(
		form: FormInterface = this.new(),
		callback = (created: FormInterface) => {},
		text = 'form has been created.'
	) {
		if (form._id) {
			this.save(form);
		} else {
			this._mongo.create('form', form, (created: FormInterface) => {
				callback(created);
				this._alert.show({ text });
			});
		}
	}

	doc(formId: string): FormInterface {
		if (!this._forms[formId]) {
			this._forms[formId] = this._mongo.fetch('form', {
				query: {
					_id: formId
				}
			});
		}
		return this._forms[formId];
	}

	update(
		form: FormInterface,
		callback = () => {},
		text = 'form has been updated.'
	): void {
		this._mongo.afterWhile(form, () => {
			this.save(form, callback, text);
		});
	}

	save(
		form: FormInterface,
		callback = () => {},
		text = 'form has been updated.'
	): void {
		this._mongo.update(
			'form',
			{
				_id: form._id,
				title: form.title,
				formId: form.formId,
				active: form.active,
				components: form.components.map((c) => {
					return {
						name: c.name,
						key: c.key,
						root: c.root,
						fields: c.fields,
						components: c.components
					};
				})
			},
			() => {
				callback();
				if (text) this._alert.show({ text, unique: 'form' });
			}
		);
	}

	delete(
		form: FormInterface,
		callback = () => {},
		text = 'form has been deleted.'
	): void {
		this._mongo.delete('form', form, () => {
			callback();
			if (text) this._alert.show({ text });
		});
	}
}

// deprecated
@Directive({
	selector: 'ng-template[formcomponent]'
})
export class FormComponentDirective {
	@Input() formcomponent: any;

	constructor(public template: TemplateRef<any>) {}
}
