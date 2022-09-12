import { Component } from '@angular/core';
import { User } from 'src/app/core';
import { UserService } from 'src/app/services';
import { UiService } from 'wacom';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.scss']
})
export class UsersComponent{
	columns = ['user', 'email', 'roles', 'actions'];
	new_user: User = this.us.empty();
	search = '';
	constructor(
		public us: UserService,
		public ui: UiService
	) {}
}
