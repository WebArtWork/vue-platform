import {
	ComponentFactoryResolver,
	ApplicationRef,
	TemplateRef,
	Injectable,
	Injector,
	Type
} from '@angular/core';
import { StoreService } from 'wacom';
import {
	TemplateComponentInterface,
	FormComponentInterface,
	TemplateFieldInterface
} from './interfaces/component.interface';
import { ModalService } from 'src/app/core/modules/modal/modal.service';
import { FormInterface } from './interfaces/form.interface';
import { ModalFormComponent } from './modals/modal-form/modal-form.component';
import { TranslateService } from '../translate/translate.service';
import { ModalUniqueComponent } from './modals/modal-unique/modal-unique.component';
import { Modal } from '../modal/modal.interface';
import { environment } from 'src/environments/environment';

export interface FormModalButton {
	/** Function to execute on button click */
	click: (submition: unknown, close: () => void) => void;
	/** Label for the button */
	label: string;
	/** CSS class for the button (optional) */
	class?: string;
}

@Injectable({
	providedIn: 'root'
})
export class FormService {
	/** Application ID from the environment configuration */
	readonly appId = (environment as unknown as { appId: string }).appId;

	constructor(
		private componentFactoryResolver: ComponentFactoryResolver,
		private _translate: TranslateService,
		private _modal: ModalService,
		private _store: StoreService,
		private appRef: ApplicationRef,
		private injector: Injector
	) {
		// Fetch custom forms and initialize them with components
		// this.customForms = _mongo.get(
		// 	'form',
		// 	{
		// 		param: '?appId=' + this.appId
		// 	},
		// 	(arr: any, obj: any) => {
		// 		this._forms = obj;
		// 	}
		// );

		// Load form IDs from the store
		this._store.getJson('formIds', (formIds: string[]) => {
			if (Array.isArray(formIds)) {
				this.formIds.push(...formIds);
			}
		});
	}

	private _injectedComponent: Record<string, boolean> = {};
	injectComponent<T>(component: Type<T>) {
		if (!this._injectedComponent[component.name]) {
			this._injectedComponent[component.name] = true;

			const componentFactory =
				this.componentFactoryResolver.resolveComponentFactory(
					component
				);

			const componentRef = componentFactory.create(this.injector);

			this.appRef.attachView(componentRef.hostView);

			const domElem = (componentRef.hostView as any)
				.rootNodes[0] as HTMLElement;

			document.body.appendChild(domElem);
		}
	}
	private _templateComponent: Record<string, TemplateRef<unknown>> = {};
	addTemplateComponent<T>(name: string, template: TemplateRef<T>) {
		if (!this._templateComponent[name]) {
			this._templateComponent[name] = template;
		}
	}
	getTemplateComponent(name: string): TemplateRef<unknown> | undefined {
		return this._templateComponent[name];
	}

	/** Translates the form title and its components' fields */
	translateForm(form: FormInterface): void {
		if (form.title) {
			form.title = this._translate.translate(
				`Form_${form.formId}.${form.title}`,
				(title: string) => {
					form.title = title;
				}
			);

			for (const component of form.components) {
				for (const field of component.fields || []) {
					this.translateFormComponent(form, field);
				}
			}
		}
	}
	/** Translates individual form components' fields */
	translateFormComponent(
		form: FormInterface,
		field: TemplateFieldInterface
	): void {
		const fieldValue = field.value;

		if (typeof fieldValue === 'string' && !field.skipTranslation) {
			field.value = this._translate.translate(
				`Form_${form.formId}.${fieldValue}`,
				(value: string) => {
					field.value = value;
				}
			);
		}
	}

	/** List of forms managed by the service */
	forms: FormInterface[] = [];

	/** List of form IDs managed by the service */
	formIds: string[] = [];

	/** Creates a default form with specified components */
	getDefaultForm(
		id: string,
		components = ['name', 'description']
	): FormInterface {
		if (this.formIds.indexOf(id) === -1) {
			this.formIds.push(id);

			this._store.setJson('formIds', this.formIds);
		}

		const form = {
			id,
			components: components.map((key, index) => {
				const name = key.includes('.') ? key.split('.')[1] : 'Text';

				return {
					name,
					key,
					focused: !index,
					fields: [
						{
							name: 'Placeholder',
							value: 'Enter your ' + key.split('.')[0]
						},
						{
							name: 'Label',
							value: key.split('.')[0].capitalize()
						}
					]
				};
			})
		};

		return form;
	}

	/** Retrieves a form by its ID, initializing it if necessary */
	getForm(formId: string, form?: FormInterface): FormInterface {
		if (
			form &&
			this.forms.map((c) => c.formId).indexOf(form?.formId) === -1
		) {
			this.forms.push(form);
		}

		if (this.formIds.indexOf(formId) === -1) {
			this.formIds.push(formId);

			this._store.setJson('formIds', this.formIds);
		}

		const devForm = this.forms.find((f) => f.formId === formId);

		const customForm = this.customForms.find(
			(f) => f.formId === formId && f.active
		);

		const defaultForm = this.getDefaultForm(formId);

		if (form) {
			for (const component of form.components) {
				component.root = true;
			}
		}

		if (customForm) {
			for (const component of customForm.components) {
				component.root = false;
			}
		}

		if (!form) {
			form = devForm
				? { ...devForm }
				: customForm
				? { ...customForm }
				: defaultForm;
		}

		form.formId = formId;

		form.title = form.title || devForm?.title || customForm?.title;

		form.class = form.class || devForm?.class || customForm?.class;

		if ((form || devForm) && customForm) {
			for (const component of customForm.components) {
				form.components.push(component);
			}
		}

		this.translateForm(form);

		return form;
	}

	/** Shows a modal form with specified options */
	modal<T>(
		form: FormInterface | FormInterface[],
		buttons: FormModalButton | FormModalButton[] = [],
		submition: unknown = {},
		change = (doc: T) => {},
		modalOptions: Modal = {}
	): Promise<T> {
		return new Promise((resolve) => {
			this._modal.show({
				...modalOptions,
				component: ModalFormComponent,
				class: 'forms_modal',
				form,
				buttons: Array.isArray(buttons) ? buttons : [buttons],
				submition,
				onClose: function () {
					resolve(this.submition as T);
				},
				submit: (update: T) => {
					resolve(update);
				},
				change: (update: T) => {
					if (typeof change === 'function') {
						change(update);
					}
				}
			});
		});
	}

	/** Shows a modal with a unique component */
	modalUnique<T>(
		module: string,
		field: string,
		doc: T,
		component: string = '',
		onClose = () => {}
	): void {
		this._modal.show({
			component: ModalUniqueComponent,
			form: this.getDefaultForm('unique', [
				field + (component ? '.' + component : '')
			]),
			module,
			field,
			doc,
			class: 'forms_modal',
			onClose
		});
	}

	/** List of custom forms managed by the service */
	customForms: FormInterface[] = [];
}
