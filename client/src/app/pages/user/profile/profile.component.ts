import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';
import { User, UserService } from 'src/app/core';
import { CoreService } from 'wacom';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';

interface ChangePassword {
	oldPass: string;
	newPass: string;
}

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	constructor(
		private _form: FormService,
		private _core: CoreService,
		public us: UserService
	) {}

	// Update user profile
	formProfile: FormInterface = this._form.getForm('profile');

	get user(): Record<string, unknown> {
		return (this.us.user as unknown as Record<string, unknown>);
	}

	update(submition: User): void {
		this._core.copy(submition, this.us.user);

		this.us.update();
	}

	// Update user password
	formPassword: FormInterface = this._form.getForm('change password');

	change_password(): void {
		this._form
			.modal<ChangePassword>(this.formPassword, {
				label: 'Change',
				click: (submition: unknown, close: () => void) => {
					this.us.change_password(
						(submition as ChangePassword).oldPass,
						(submition as ChangePassword).newPass
					);
					close();
				}
			})
			.then((submition: ChangePassword) => {
				this.us.change_password(submition.oldPass, submition.newPass);
			});
	}
}
