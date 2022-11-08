import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
	selector: 'wtextarea',
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.scss']
})
export class TextareaComponent implements OnInit {
	@Input() set = '';

	@Input() label = '';

	@Input() placeholder = '';

	@Input() disabled: boolean;

	@Input() focused: boolean;

	@Output() change = new EventEmitter();

	@Output() submit = new EventEmitter();

	@ViewChild('inputEl') inputEl: ElementRef;

	ngOnInit() {
		if (this.focused) {
			setTimeout(() => {
				this.inputEl.nativeElement.focus();
			}, 100);
		}
	}
}
