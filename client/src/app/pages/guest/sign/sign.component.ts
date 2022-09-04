import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormConfig, FormModules, FormOutputs } from 'src/app/modules/form/form.service';
import {
	HashService,
	HttpService,
	AlertService,
	UiService
} from 'wacom';
import { UserService } from 'src/app/services';
import { Router } from '@angular/router';
import { User } from 'src/app/core';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { ButtonTypes } from 'src/app/modules/button/button.interface';

interface RespStatus {
	email: string;
	pass: string
}
@Component({
	templateUrl: './sign.component.html',
	styleUrls: ['./sign.component.scss']
})

export class SignComponent {
	public formConfig: FormConfig = {
		title: 'Sign In / Sign Up',
		components: [
			{
				module: FormModules.INPUT,
				type: InputTypes.EMAIL,
				placeholder: 'fill your email',
				label: 'E-mail',
				input: 'email'
			},
			{
				module: FormModules.INPUT,
				type: InputTypes.PASSWORD,
				placeholder: 'fill your password',
				label: 'Password',
				input: 'password'
			}, {
				module: FormModules.BUTTON,
				output: FormOutputs.SUBMIT,
				type: ButtonTypes.PRIMARY,
				label: 'Sign'
			}
		]
	}
	public user = {
		email: this.hash.get('email') || 'ceo@webart.work',
		password: this.hash.get('password') || 'asdasdasdasd',
		code: ''
	};
	public show_password = false;
	constructor(
		private alert: AlertService,
		private http: HttpService,
		private hash: HashService,
		private us: UserService,
		private router: Router,
		public ui: UiService
	) {}
	@ViewChild('email', { static: false }) email!: ElementRef;
	email_focus() {
		setTimeout(() => {
			this.email.nativeElement.focus();
		}, 100);
	}
	@ViewChild('password', { static: false }) password!: ElementRef;
	password_focus() {
		setTimeout(() => {
			this.password.nativeElement.focus();
		}, 100);
	}
	submit() {
		if (this.reseting && this.user.code) {
			return this.save();
		}
		if (!this.user.email) {
			this.alert.error({
				text: 'Enter your email',
			});
			return this.email_focus();
		}
		this.hash.set('email', this.user.email);
		if (!this.user.password) {
			this.alert.error({
				text: 'Enter your password',
			});
			return this.password_focus();
		}
		this.http.post('/api/user/Respstatus', this.user, (resp: RespStatus) => {
			if (resp.email && resp.pass) {
				this.login();
			} else if (resp.email) {
				this.reset();
			} else {
				this.sign();
			}
		});
	}
	login() {
		this.http.post('/api/user/login', this.user, (user: User) => {
			if (!user) {
				return this.alert.error({
					text: "Something went wrong",
				});
			}
			localStorage.setItem('waw_user', JSON.stringify(user));
			this.http.set('token', user.token);
			this.router.navigate(['/profile']);
			this.us.user = user;
		});
	}
	sign() {
		this.http.post('/api/user/sign', this.user, (user: User) => {
			if (!user) {
				return this.alert.error({
					text: "Something went wrong",
				});
			}
			localStorage.setItem('waw_user', JSON.stringify(user));
			this.http.set('token', user.token);
			this.router.navigate(['/profile']);
			this.us.user = user;
		});
	}
	public reseting = false;
	reset() {
		this.http.post('/api/user/request', this.user, () => {
			this.reseting = true;
		});
		this.alert.info({
			text: "Mail will sent to your email"
		});
	}
	save() {
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
			this.http.post('/api/user/login', this.user, (user: User) => {
				if (!user) {
					return this.alert.error({
						text: "Something went wrong",
					});
				}
				this.us.user = user;
				this.http.set('token', user.token);
				localStorage.setItem('waw_user', JSON.stringify(user));
				this.router.navigate(['/profile']);
			});
		});
	}
}
