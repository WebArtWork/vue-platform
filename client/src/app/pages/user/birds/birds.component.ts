import { Component } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';
import { BirdService, Bird } from 'src/app/core/services/bird.service';
import { FormInterface } from 'src/app/modules/form/interfaces/form.interface';
import { TranslateService } from 'src/app/modules/translate/translate.service';
import { AlertService, CoreService } from 'wacom';

@Component({
	templateUrl: './birds.component.html',
	styleUrls: ['./birds.component.scss']
})
export class BirdsComponent {
	columns = ['name', 'description'];

	form: FormInterface = this._form.getForm('bird');

	config = {
		create: () => {
			this._form
				.modal<Bird>(this.form, {
					label: 'Create',
					click: (created: unknown, close: () => void) => {
						this._bs.create(created as Bird);

						close();
					}
				})
				.then(this._bs.create.bind(this));
		},
		update: (doc: Bird) => {
			this._form.modal<Bird>(this.form, [], doc).then((updated: Bird) => {
				this._core.copy(updated, doc);

				this._bs.save(doc);
			});
		},
		delete: (bird: Bird) => {
			this._alert.question({
				text: this._translate.translate(
					'Birds.Are you sure you want to delete this Bird?'
				),
				buttons: [
					{
						text: this._translate.translate('Common.No')
					},
					{
						text: this._translate.translate('Common.Yes'),
						callback: () => {
							this._bs.delete(bird);
						}
					}
				]
			});
		}
	};

	get rows(): Bird[] {
		return this._bs.birds;
	}

	constructor(
		private _translate: TranslateService,
		private _alert: AlertService,
		private _form: FormService,
		private _core: CoreService,
		private _bs: BirdService
	) {}
}
