import { Component } from '@angular/core';
import { UserService } from 'src/app/services';
import { Animation } from "src/app/core/animation"
import { StoreService } from 'wacom';

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [Animation]
})
export class UserComponent {
	public show: any = false;
	public mode = '';
	constructor(
		public us: UserService,
		private store: StoreService
	) {
		store.get('mode', (mode: string) => {
			if(mode) {
				this.mode = mode;
				(document.getElementById('html') as any).classList.add(mode);
			}
		});
	}
	set(mode = '') {
		if (mode) {
			this.store.set('mode', mode);
			(document.getElementById('html') as any).classList.add(mode);
		} else {
			this.store.remove('mode');
			(document.getElementById('html') as any).classList.remove(this.mode);
		}
		this.mode = mode;
	}
}
