import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
	templateUrl: './number.component.html',
	styleUrls: ['./number.component.scss']
})
export class NumberComponent {
	field: any = {};
	component: any = {};
	control: FormControl;
	form: FormGroup;
	value: number;
}
