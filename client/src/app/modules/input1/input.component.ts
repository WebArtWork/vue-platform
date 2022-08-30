import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'winput',
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.scss']
})
export class InputComponent{
	@Input() wngModel: any;
	@Input() label: any;
	@Input() name = 'name';
	@Input() type = 'text';
	@Input() placeholder: any;
	@Input() disabled: any;
	@Output() wngModelChange = new EventEmitter()

	constructor() {}
}
