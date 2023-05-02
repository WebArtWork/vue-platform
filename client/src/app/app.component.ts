import { Component, TemplateRef, OnInit, ViewChild } from '@angular/core';
import { FormService } from './modules/form/form.service';
import { TranslateService } from './modules/translate/translate.service';

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

	@ViewChild('passwordRef', { static: true }) passwordRef: TemplateRef<unknown>;

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

	constructor(
		private _form: FormService,
		private _translate: TranslateService
	) {
		this._form.setTranslate(
			this._translate.translate.bind(this._translate)
		);

		this._form.addForm({
			formId: 'sign',
			title: 'Sign In / Sign Up',
			components: [
				{
					name: 'Email',
					key: 'email',
					root: true,
					focused: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your email'
						},
						{
							name: 'Label',
							value: 'Email'
						}
					]
				},
				{
					name: 'Password',
					key: 'password',
					root: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your password'
						},
						{
							name: 'Label',
							value: 'Password'
						}
					]
				},
				{
					name: 'Number',
					key: 'code',
					root: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill code from email'
						},
						{
							name: 'Label',
							value: 'code'
						}
					],
					hidden: true
				},
				{
					name: 'Button',
					fields: [
						{
							name: 'Label',
							value: "Let's go"
						}
					]
				}
			]
		});

		this._form.addForm({
			formId: 'change password',
			title: 'Change password',
			components: [
				{
					name: 'Password',
					key: 'oldPass',
					root: true,
					focused: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your old password'
						},
						{
							name: 'Label',
							value: 'Old Password'
						}
					]
				},
				{
					name: 'Password',
					key: 'newPass',
					root: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your new password'
						},
						{
							name: 'Label',
							value: 'New Password'
						}
					]
				}
			]
		});

		this._form.addForm({
			formId: 'profile',
			title: 'Profile Settings',
			components: [
				{
					name: 'Text',
					key: 'name',
					root: true,
					focused: true,
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your name'
						},
						{
							name: 'Label',
							value: 'Name'
						}
					]
				},
				{
					name: 'Text',
					key: 'phone',
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your phone'
						},
						{
							name: 'Label',
							value: 'Phone'
						}
					]
				},
				{
					name: 'Text',
					key: 'bio',
					fields: [
						{
							name: 'Placeholder',
							value: 'fill your bio'
						},
						{
							name: 'Label',
							value: 'Bio'
						}
					]
				}
			]
		});
	}
}
