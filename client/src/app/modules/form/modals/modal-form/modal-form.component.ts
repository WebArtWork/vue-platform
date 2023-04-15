import { Component, TemplateRef } from '@angular/core';
import { FormModalButton, FormService } from '../../form.service';
import { FormInterface } from '../../interfaces/form.interface';

@Component({
  templateUrl: './modal-form.component.html',
  styleUrls: ['./modal-form.component.scss']
})
export class ModalFormComponent {
	form: FormInterface;

	submition: Record<string, unknown>;

	close: () => void;

	submit: (form: any) => void;

	change: (form: any) => void;

	buttons: FormModalButton[];

	buttonRef: TemplateRef<any>;

	constructor(private _fs: FormService) {
		const button = this._fs.getComponent('Button');

		if (button?.ref) {
			this.buttonRef = button.ref;
		}
	}
}
