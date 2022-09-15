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
		delete: (user: any)=>{
			this.us.delete(user);
		}
	};

	columns = ['name', 'email'];

	new_user: User = this.us.empty();

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
