import {
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	TemplateRef
} from '@angular/core';
import { FormComponentInterface } from '../interfaces/component.interface';
import { FormInterface } from '../interfaces/form.interface';
import { FormService } from '../form.service';

@Component({
	selector: 'form-component',
	templateUrl: './form-component.component.html',
	styleUrls: ['./form-component.component.scss']
})
export class FormComponentComponent implements OnInit {
	@Input() config: FormInterface;

	@Input() component: FormComponentInterface;

	@Input() submition: Record<string, unknown> = {};

	@Output() wSubmit = new EventEmitter();

	@Output() wChange = new EventEmitter();

	@Output() wClick = new EventEmitter();

	submit(): void {}

	change(): void {}

	click(): void {}

	get hasComponents(): boolean {
		return Array.isArray(this.component.components);
	}

	get template(): TemplateRef<unknown> {
		return this._form.getTemplateComponent(
			this.component.name as string
		) as TemplateRef<unknown>;
	}

	field: Record<string, unknown> = {};

	constructor(private _form: FormService) {}

	value(key: string, doc: Record<string, unknown>): unknown {
		if (key.indexOf('.') > -1) {
			const localKey: string = key.slice(0, key.indexOf('.'));

			if (!doc[localKey]) {
				doc[localKey] = {};
			}

			return this.value(
				key.slice(key.indexOf('.') + 1),
				doc[localKey] as Record<string, unknown>
			);
		} else {
			return doc[key];
		}
	}

	ngOnInit(): void {
		if (Array.isArray(this.component.fields)) {
			for (const field of this.component.fields) {
				this.field[field.name] = field.value;
			}
		}

		// const data: Data = {
		// 	field: {}
		// } as Data;

		// if (this.component.key && this.submition !== undefined) {
		// 	if (this.component.root) {
		// 		data.value = this.value(this.component.key, this.submition);
		// 	} else {
		// 		if (!this.submition['data']) {
		// 			this.submition['data'] = {};
		// 		}

		// 		data.value = this.value(
		// 			this.component.key,
		// 			this.submition['data'] as Record<string, unknown>
		// 		);
		// 	}
		// }

		// if (this.component.key && !this.control) {
		// 	this.control = new FormControl(data.value);

		// 	this.control.valueChanges.subscribe((value: unknown) => {
		// 		if (this.component.root) {
		// 			this.submition[this.component.key as string] = value;
		// 		} else {
		// 			(this.submition['data'] as Record<string, unknown>)[
		// 				this.component.key as string
		// 			] = value;
		// 		}

		// 		this.wChange.emit();
		// 	});

		// 	this.form.addControl(this.component.key, this.control);
		// }

		// this.data = data;

		// if (!this.component.component) {
		// 	this._form.addRef(this.component);
		// }

		// this._viewContainerRef.insert(
		// 	this._dom.getComponentRef(this.component.component, {
		// 		component: this.component,
		// 		config: this.config,
		// 		field: this.data.field,
		// 		value: this.data.value,
		// 		control: this.control,
		// 		form: this.form,
		// 		wSubmit: this.wSubmit.emit,
		// 		wChange: this.wChange.emit,
		// 		wClick: this.wClick.emit
		// 	}).hostView as unknown as ViewRef
		// );
	}
}
