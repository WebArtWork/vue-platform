import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
	templateUrl: './date.component.html',
	styleUrls: ['./date.component.scss']
})
export class DateComponent {
	constructor() {
		console.log('started');
	}
	component: any = {};
	control: FormControl;
	field: any = {};
	form: FormGroup;
	value: string;
}
