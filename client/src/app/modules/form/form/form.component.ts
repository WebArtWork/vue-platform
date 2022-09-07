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

	inputType(component: FormComponentInterface): InputTypes  {
		return (component.type as unknown as InputTypes) || InputTypes.TEXT
	}

	disabled(component: FormComponentInterface): boolean  {
		if (typeof component.disabled === 'function') {
			return component.disabled();
		} else {
			return false;
		}
	}

	buttonType(component: FormComponentInterface): ButtonTypes {
		return component.type as unknown as ButtonTypes;
	}

	public data: Any = {};

	togglePassword(component: FormComponentInterface, i: number) {
		if (this.data[i + 'password']) {
			delete this.data[i + 'password'];
			component.type = InputTypes.PASSWORD;
		} else {
			this.data[i + 'password'] = true;
			component.type = InputTypes.TEXT;
		}
	}
}
