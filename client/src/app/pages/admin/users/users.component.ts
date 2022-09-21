import { Component } from '@angular/core';
import { User } from 'src/app/core';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { UserService } from 'src/app/core';
import { UiService } from 'wacom';
import { FormModules, FormOutputs } from 'src/app/modules/form/form.service';
import { ButtonTypes } from 'src/app/modules/button/button.interface';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent {
	readonly inputTypes = InputTypes;

	config = {
		formCreate: {
			title: 'Create New User',
			components: [
				{
					module: FormModules.INPUT,
					type: InputTypes.EMAIL,
					placeholder: 'fill email',
					label: 'E-mail',
					input: 'email'
				},
				{
					module: FormModules.INPUT,
					placeholder: 'fill name',
					label: 'Name',
					input: 'name'
				},
				{
					module: FormModules.BUTTON,
					output: FormOutputs.SUBMIT,
					type: ButtonTypes.PRIMARY,
					label: 'Create'
				}
			]
		},
		formUpdate: {
			title: 'Update User',
			components: [
				{
					module: FormModules.INPUT,
					type: InputTypes.EMAIL,
					placeholder: 'fill email',
					label: 'E-mail',
					input: 'email'
				},
				{
					module: FormModules.INPUT,
					placeholder: 'fill name',
					label: 'Name',
					input: 'name'
				},
				{
					module: FormModules.BUTTON,
					output: FormOutputs.SUBMIT,
					type: ButtonTypes.PRIMARY,
					label: 'Update'
				}
			]
		},
		doc: 'email name',
		new: () => {
			return this.us.new();
		},
		create: (user: User) => {
			this.us.create(user);
		},
		update: (user: User) => {
			this.us.save(user);
		},
		delete: (user: User) => {
			this.us.delete(user);
		}
	};

	columns = ['name', 'email'];

	new_user: User = this.us.new();

	search = '';

	constructor(public us: UserService, public ui: UiService) {
		for (const role of this.us.roles) {
			this.columns.push(role);
		}
	}
}
