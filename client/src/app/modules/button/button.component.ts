import { Component, Input } from '@angular/core';
import { ButtonTypes } from './button.interface';

@Component({
	selector: 'wbutton',
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
	@Input() type: ButtonTypes = ButtonTypes.PRIMARY;

	readonly types = ButtonTypes;
}
