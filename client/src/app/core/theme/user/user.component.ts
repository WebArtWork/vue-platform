import { coreAnimation } from '../../animations/core.animations';
import { UserService } from 'src/app/modules/user/services/user.service';
import { Platform } from '@angular/cdk/platform';
import { Component } from '@angular/core';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [coreAnimation]
})
export class UserComponent {
	showSidebar = false;
	hideSidebar() {
		if (!this._platform.ANDROID && !this._platform.IOS) {
			this.showSidebar = false;
		}
	}

	constructor(public us: UserService, private _platform: Platform) {}
}
