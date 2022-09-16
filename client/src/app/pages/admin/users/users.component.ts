import { Component } from '@angular/core';
import { User } from 'src/app/core';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { UserService } from 'src/app/services';
import { UiService } from 'wacom';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent {
	readonly inputTypes = InputTypes;

	config = {
		doc: 'email name',
		new: ()=>{
			return this.us.new();
		},
		create: (user: User) => {
			this.us.create(user);
		},
		update: (user: User)=>{
			this.us.save(user);
		},
		delete: (user: User)=>{
			this.us.delete(user);
		}
	};

	columns = ['name', 'email'];

	new_user: User = this.us.new();

	search = '';

	constructor (
		public us: UserService,
		public ui: UiService
	) {
		for (const role of this.us.roles) {
			this.columns.push(role);
		}
	}
}
