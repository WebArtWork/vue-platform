import { Component, ViewChild, ElementRef } from '@angular/core';
import { HashService, HttpService, AlertService, UiService } from 'wacom';
import { UserService } from 'src/app/core';
import { Router } from '@angular/router';
import { User } from 'src/app/core';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { FormService } from 'src/app/modules/form/form.service';

interface RespStatus {
	email: string;
	pass: string;
}

interface Form {
	email: string;
	password: string;
	code: string;
}

@Component({
	templateUrl: './sign.component.html',
	styleUrls: ['./sign.component.scss']
})
export class SignComponent {
	form: FormInterface = this._form.getForm('sign');

	user = {
		email: 'ceo@webart.work',
		password: 'asdasdasdasd'
	};

	constructor(
		public us: UserService,
		public ui: UiService,
		private _alert: AlertService,
		private _http: HttpService,
		private _hash: HashService,
		private _router: Router,
		private _form: FormService
	) {
		console.log(this.form);
	}

	submit(form: Form): void {
		if (!this.form.components[2].hidden && form.code) {
			return this.save();
		}

		if (!form.email) {
			this._alert.error({
				text: 'Enter your email'
			});

			return;
			//return this.email_focus();
		}

		if (!this.ui.valid(form.email)) {
			this._alert.error({
				text: 'Enter proper email'
			});

			return;
			//return this.email_focus();
		}

		this._hash.set('email', form.email);

		if (!form.password) {
			this._alert.error({
				text: 'Enter your password'
			});

			return;
			// return this.password_focus();
		}

		this._http.post('/api/user/status', form, (resp: RespStatus) => {
			if (resp.email && resp.pass) {
				this.login(form);
			} else if (resp.email) {
				this.reset(form);
			} else {
				this.sign(form);
			}
		});
	}

	login(user: Form): void {
		this._http.post('/api/user/login', user, this._set.bind(this));
	}

	sign(user: Form): void {
		this._http.post('/api/user/sign', user, this._set.bind(this));
	}

	reset(user: Form): void {
		this._http.post('/api/user/request', user, () => {
			this.form.components[2].hidden = false;
		});

		this._alert.info({
			text: 'Mail will sent to your email'
		});
	}

	save(): void {
		// this._http.post('/api/user/change', this.user, (resp: boolean) => {
		// 	if (resp) {
		// 		this._alert.info({
		// 			text: 'Password successfully changed'
		// 		});
		// 	} else {
		// 		this._alert.error({
		// 			text: 'Wrong Code'
		// 		});
		// 	}

		// 	this.login();
		// });
	}

	private _set = (user: User): void => {
		if (!user) {
			return this._alert.error({
				text: 'Something went wrong'
			});
		}

		localStorage.setItem('waw_user', JSON.stringify(user));

		this._http.set('token', user.token);

		this.us.user = user;

		this.us.load();

		this._router.navigate(['/profile']);
	}
}
