import { Component, EventEmitter, Input, Output  } from '@angular/core';
import { UiService } from 'wacom';
import { ButtonTypes } from '../../button/button.interface';
import { InputTypes } from '../../input/input.interface';
import {
	FormConfig,
	FormComponent as FormComponentInterface,
	FormModules,
	FormOutputs,
	FormService
} from '../form.service';
interface Any {
	[key: string]: boolean;
}
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

	constructor(
		public fm: FormService,
		public ui: UiService
	) {}

	focus(component: FormComponentInterface): void {
		console.log(component);
	}

	show(component: FormComponentInterface): void {
		console.log(component);
	}

	hide(component: FormComponentInterface): void {
		console.log(component);
	}
}
