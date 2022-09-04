import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { ButtonTypes } from '../../button/button.interface';
import { InputTypes } from '../../input/input.interface';
import {
	FormConfig,
	FormModules,
	FormOutputs,
	FormService
} from '../form.service';

@Component({
	selector: 'wform',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent {
	readonly modules = FormModules;

	readonly inputTypes = InputTypes;

	readonly buttonTypes = ButtonTypes;

	readonly outputs = FormOutputs;

	@Input() config: FormConfig;

	@Input() doc: any = {};

	@Output() submit = new EventEmitter();

	@Output() change = new EventEmitter();

	constructor(public fm: FormService) {}

	type(component: FormComponent): InputTypes  {
		return (component.type as InputTypes) || InputTypes.TEXT
	}

	disabled(component: FormComponent): boolean  {
		if (typeof component.disabled !== 'function') {
			return component.disabled(component);
		} else {
			return false;
		}
	}
}
