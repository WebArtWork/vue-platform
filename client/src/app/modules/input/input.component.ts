import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'winput',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent {
	@Input() wngModel: unknown;
	@Input() label: string;
	@Input() name = 'name';
	@Input() type = 'text';
	@Input() placeholder: string;
	@Input() disabled: bool;
	@Output() wngModelChange = new EventEmitter()

	constructor() { }
}
