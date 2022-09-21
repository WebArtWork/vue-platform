import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonTypes } from 'src/app/modules/button/button.interface';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { UiService } from 'wacom';
import { FormComponent, FormModules } from '../../form.service';

@Component({
	selector: 'form-component',
	templateUrl: './component.component.html',
	styleUrls: ['./component.component.scss']
})
export class ComponentComponent implements OnInit {
	readonly modules = FormModules;

	readonly inputTypes = InputTypes;

	@Input() doc: any = {};

	@Input() component: FormComponent;

	@Output() submit = new EventEmitter();

	@Output() change = new EventEmitter();

	use_doc: any = {};

	input: any = {};

	ngOnInit(): void {
		this.input = this.component.input;

		this.use_doc = this.doc;

		if (this.input && this.input.split('.').length > 1) {
			const deep = this.input.split('.');

			while (deep.length > 1) {
				console.log(deep.length, this.use_doc);

				const put = deep.shift();

				this.use_doc = this.use_doc[put];

				console.log(deep.length, this.use_doc, put, this.doc[put]);
			}

			this.input = deep[0];
		}
	}

	inputType(): InputTypes {
		return (
			(this.component.type as unknown as InputTypes) || InputTypes.TEXT
		);
	}

	disabled(): boolean {
		if (typeof this.component.disabled === 'function') {
			return this.component.disabled();
		} else {
			return false;
		}
	}

	buttonType(): ButtonTypes {
		return this.component.type as unknown as ButtonTypes;
	}

	password = false;

	togglePassword() {
		if (this.password) {
			this.password = false;

			this.component.type = InputTypes.PASSWORD;
		} else {
			this.password = true;

			this.component.type = InputTypes.TEXT;
		}
	}

	constructor(public ui: UiService) {}
}
