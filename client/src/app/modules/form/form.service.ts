import { Injectable } from '@angular/core';
import { ModalService } from 'wacom';
import { ButtonTypes } from '../button/button.interface';
import { InputTypes } from '../input/input.interface';
import { ModalComponent } from './modal/modal.component';

export enum FormModules {
	INPUT = 'winput',
	BUTTON = 'wbutton',
	TEXTAREA = 'wtextarea'
}

export enum FormOutputs {
	SUBMIT = 'submit',
	CHANGE = 'change'
}

export interface FormComponent {
	module: FormModules;
	type?: InputTypes | ButtonTypes;
	label?: string;
	hidden?: boolean;
	placeholder?: string;
	input?: string;
	output?: FormOutputs;
	disabled?: () => boolean;
}

export interface FormConfig {
	title?: string;
	class?: string;
	components: FormComponent[];
}

@Injectable({
	providedIn: 'root'
})
export class FormService {
	constructor(private _modal: ModalService) {}

	modal(config: FormConfig, doc: any, submit = () => {}, change = () => {}) {
		this._modal.show({
			component: ModalComponent,
			class: 'forms_modal',
			config,
			submit,
			change,
			doc
		});
	}
}
