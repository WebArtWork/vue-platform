import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { FormService } from './modules/form/form.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild('textRef', { static: true }) textRef: TemplateRef<unknown>;

	@ViewChild('dateRef', { static: true }) dateRef: TemplateRef<unknown>;

	@ViewChild('timeRef', { static: true }) timeRef: TemplateRef<unknown>;

	@ViewChild('numberRef', { static: true }) numberRef: TemplateRef<unknown>;

	@ViewChild('emailRef', { static: true }) emailRef: TemplateRef<unknown>;

	@ViewChild('passwordRef', { static: true })
	passwordRef: TemplateRef<unknown>;

	@ViewChild('buttonRef', { static: true }) buttonRef: TemplateRef<unknown>;

	ngOnInit(): void {
		this._form.addComponent({
			name: 'Text',
			ref: this.textRef,
			fields: ['Placeholder', 'Label']
		});

		this._form.addComponent({
			name: 'Date',
			ref: this.dateRef,
			fields: ['Placeholder', 'Label']
		});

		this._form.addComponent({
			name: 'Time',
			ref: this.timeRef,
			fields: ['Placeholder', 'Label']
		});

		this._form.addComponent({
			name: 'Number',
			ref: this.numberRef,
			fields: ['Placeholder', 'Label']
		});

		this._form.addComponent({
			name: 'Email',
			ref: this.emailRef,
			fields: ['Placeholder', 'Label']
		});

		this._form.addComponent({
			name: 'Password',
			ref: this.passwordRef,
			fields: ['Placeholder', 'Label']
		});

		this._form.addComponent({
			name: 'Button',
			ref: this.buttonRef,
			fields: ['Label']
		});

		this._form.inited = true;
	}

	constructor(private _form: FormService) {}
}
