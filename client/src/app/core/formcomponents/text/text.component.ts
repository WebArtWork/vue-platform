import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormComponentInterface } from 'src/app/modules/form/interfaces/component.interface';
@Component({
	selector: 'text-formcomponents',
	templateUrl: './text.component.html',
	styleUrls: ['./text.component.scss']
})
export class TextComponent {
	field: Record<string, unknown>;
	component: FormComponentInterface;
	control: FormControl;
	form: FormGroup;
	value: unknown;
}
