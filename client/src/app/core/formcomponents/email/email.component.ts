import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
	templateUrl: './email.component.html',
	styleUrls: ['./email.component.scss']
})
export class EmailComponent {
	field: any = {};
	component: any = {};
	control: FormControl;
	form: FormGroup;
	value: string;
}
