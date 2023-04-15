import { Component } from '@angular/core';
import { coreAnimation } from 'src/app/core';
import { UserService } from 'src/app/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [coreAnimation]
})
export class UserComponent {
	show = false;

	showDesktop = false;

	constructor(public us: UserService) {}
}
