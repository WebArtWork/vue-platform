import { FormControl, FormGroup } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  templateUrl: './boolean.component.html',
  styleUrl: './boolean.component.scss'
})
export class BooleanComponent {
	field: any = {};
	component: any = {};
	control: FormControl;
	form: FormGroup;
	value: boolean;
}
