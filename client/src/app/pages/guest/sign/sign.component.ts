import { Component, ViewChild, ElementRef } from '@angular/core';
import {
	FormConfig,
	FormModules
} from 'src/app/modules/form/form.service';
import { HashService, HttpService, AlertService, UiService } from 'wacom';
import { UserService } from 'src/app/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { ButtonTypes } from 'src/app/modules/button/button.interface';

interface RespStatus {
	email: string;
	pass: string;
}

@Component({
	templateUrl: './sign.component.html',
	styleUrls: ['./sign.component.scss']
})
export class SignComponent {
	user = {
		email: this.hash.get('email') || 'ceo@webart.work',
		password: this.hash.get('password') || 'asdasdasdasd',
		code: ''
	};

	@ViewChild('form') form: ElementRef;

	formConfig: FormConfig = {
		title: 'Sign In / Sign Up',
		components: [
			{
				set: 'ceo@webart.work',
				module: FormModules.INPUT,
				type: InputTypes.EMAIL,
				placeholder: 'fill your email',
				label: 'E-mail',
				input: 'email'
			},
			{
				set: 'asdasdasdasd',
				module: FormModules.INPUT,
				type: InputTypes.PASSWORD,
				placeholder: 'fill your password',
				label: 'Password',
				input: 'password'
			},
			{
				module: FormModules.INPUT,
				placeholder: 'fill code from email',
				hidden: true,
				label: 'Code',
				input: 'code'
			},
			{
				module: FormModules.BUTTON,
				type: ButtonTypes.PRIMARY,
				label: "Let's go"
			}
		]
	};

	set(user: User): void {
		if (!user) {
			return this.alert.error({
				text: 'Something went wrong'
			});
		}

		localStorage.setItem('waw_user', JSON.stringify(user));

		this.http.set('token', user.token);

		this.us.user = user;

		this.router.navigate(['/profile']);
	}

	constructor(
		private alert: AlertService,
		private http: HttpService,
		private hash: HashService,
		private us: UserService,
		private router: Router,
		public ui: UiService
	) {}

	submit(): void {
		if (!this.formConfig.components[2].hidden && this.user.code) {
			return this.save();
		}

		if (!this.user.email) {
			this.alert.error({
				text: 'Enter your email'
			});

			return;
			//return this.email_focus();
		}

		this.hash.set('email', this.user.email);

		if (!this.user.password) {
			this.alert.error({
				text: 'Enter your password'
			});

			return;
			// return this.password_focus();
		}

		this.http.post('/api/user/status', this.user, (resp: RespStatus) => {
			if (resp.email && resp.pass) {
				this.login();
			} else if (resp.email) {
				this.reset();
			} else {
				this.sign();
			}
		});
	}

	login(): void {
		this.http.post('/api/user/login', this.user, this.set.bind(this));
	}

	sign(): void {
		this.http.post('/api/user/sign', this.user, this.set.bind(this));
	}

	reset(): void {
		this.http.post('/api/user/request', this.user, () => {
			this.formConfig.components[2].hidden = false;
		});

		this.alert.info({
			text: 'Mail will sent to your email'
		});
	}

	save(): void {
		this.http.post('/api/user/change', this.user, (resp: boolean) => {
			if (resp) {
				this.alert.info({
					text: 'Password successfully changed'
				});
			} else {
				this.alert.error({
					text: 'Wrong Code'
				});
			}

			this.login();
		});
	}
}
