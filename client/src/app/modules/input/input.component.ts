import { Component, Input, Output, EventEmitter } from '@angular/core';
import { InputTypes } from './input.interface';

@Component({
	selector: 'winput',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	@Input() type: InputTypes = InputTypes.TEXT;

	@Input() wngModel: unknown;

	@Input() label = '';

	@Input() name = 'name';

	@Input() placeholder = '';

	@Input() disabled: boolean;

	@Output() wngModelChange = new EventEmitter();
}
