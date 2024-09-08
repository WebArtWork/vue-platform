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
	field: any = {};
	component: any = {};
	control: FormControl;
	form: FormGroup;
	value: string;
}
