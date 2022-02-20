import { Component } from '@angular/core';
import { UserService } from '@services';
import { Animation } from "src/app/core/animation"

@Component({
	selector: 'app-user',
	templateUrl: './user.component.html',
	styleUrls: ['./user.component.scss'],
	animations: [Animation]
})
export class UserComponent {
	public show: any = false;
	constructor(public us: UserService) {}
	darkmodeToggle(color) {
		this.us.user.data.theme = color
		if (this.us.user.data.theme == 'dark') {
			document.getElementById('html').classList.add("dark");
		}
		else if (this.us.user.data.theme != 'dark') {
			document.getElementById('html').classList.remove("dark");
		}
	}
	ngOnInit() {
		if (this.us.user.data.theme == 'dark') {
			document.getElementById('html').classList.add("dark")
		}
	}
}
