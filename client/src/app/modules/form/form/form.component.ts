import { Component, EventEmitter, Input, Output  } from '@angular/core';
import {
	FormConfig,
	FormComponent as FormComponentInterface
} from '../form.service';
@Component({
	selector: 'wform',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent {

	@Input() config: FormConfig;

	@Input() doc: any = {};

	@Output() submit = new EventEmitter();

	@Output() change = new EventEmitter();

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
