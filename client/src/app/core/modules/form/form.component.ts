import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormComponentInterface } from './interfaces/component.interface';
import { FormInterface } from './interfaces/form.interface';
import { CoreService } from 'wacom';

interface Submission {
	data: Record<string, unknown>;
	[key: string]: unknown;
}

@Component({
	selector: 'wform',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements AfterViewInit {
	@Input() config: FormInterface;

	@Input() submition: Record<string, unknown> = {};

	@Output() wChange = new EventEmitter();

	@Output() wSubmit = new EventEmitter();

	constructor(private _core: CoreService) { }

	ngAfterViewInit(): void {
		this.submition['data'] = this.submition['data'] || {};
	}

	component(
		key: string,
		components = this.config.components
	): FormComponentInterface | false {
		for (const component of components) {
			if (component.key === key) {
				return component;
			}

			if (component.components?.length) {
				const deepComponent = this.component(key, component.components);

				if (deepComponent) {
					return deepComponent;
				}
			}
		}

		return false;
	}

	fill(key: string, submition: Record<string, unknown>, value: unknown): void {
		if (key.indexOf('.') > -1) {
			const local_key: string = key.slice(0, key.indexOf('.'));

			if (!submition[local_key]) {
				submition[local_key] = {};
			}

			return this.fill(
				key.slice(key.indexOf('.') + 1),
				submition[local_key] as Record<string, unknown>,
				value
			);
		} else {
			submition[key] = value;
		}
	}

	onSubmit(): void {
		this._core.afterWhile(this, () => {
			this.wSubmit.emit(this.submition);
		});
	}

	onChange(): void {
		this._core.afterWhile(this, () => {
			this.wChange.emit(this.submition);
		});
	}

	onClick(/* component: FormComponentInterface */): void {
		// if (typeof component.click === 'function') {
		// 	component.click(this.submition);
		// }
	}
}
