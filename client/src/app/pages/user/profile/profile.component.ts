import { Component } from '@angular/core';
import { ButtonTypes } from 'src/app/modules/button/button.interface';
import { FormConfig, FormModules } from 'src/app/modules/form/form.service';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { UserService } from 'src/app/core';
import { ModalService } from 'wacom';
import { SecurityComponent } from './security/security.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	readonly buttonTypes = ButtonTypes;

	formConfig: FormConfig = {
		components: [
			{
				module: FormModules.INPUT,
				placeholder: 'fill your name',
				label: 'Name',
				input: 'name'
			},
			{
				module: FormModules.INPUT,
				placeholder: 'fill your phone',
				label: 'Phone',
				input: 'data.phone'
			},
			{
				module: FormModules.TEXTAREA,
				placeholder: 'fill your bio',
				label: 'Biography',
				input: 'data.bio'
			}
		]
	};

	constructor(public us: UserService, private modal: ModalService) {}

	change_password() {
		this.modal.show({
			component: SecurityComponent
		});
	}

	readonly inputTypes = InputTypes;
}
