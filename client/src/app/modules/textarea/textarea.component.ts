import { Component, Input, Output, EventEmitter } from '@angular/core';
@Component({
	selector: 'wtextarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent{
	@Input() wngModel: unknown;
	@Input() label = '';
	@Input() placeholder = '';
	@Input() disabled = null;
	@Input() model = null;
	@Output() modelChange = new EventEmitter()

	constructor() {}
}
