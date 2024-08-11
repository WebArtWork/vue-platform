import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss']
})
export class TextComponent {
	field: any = {};
	component: any = {};
	control: FormControl;
	form: FormGroup;
	value: string;
}
