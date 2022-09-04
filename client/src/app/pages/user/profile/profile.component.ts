import { Component } from '@angular/core';
import { InputTypes } from 'src/app/modules/input/input.interface';
import { UserService } from 'src/app/services';
import { ModalService } from 'wacom';
import { SecurityComponent } from './security/security.component';

@Component({
	selector: 'app-profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
	readonly inputTypes = InputTypes;
	constructor(
		public us: UserService,
		private modal: ModalService
	) {}
	change_password(){
		this.modal.show({
			component: SecurityComponent
		});
	}
}
