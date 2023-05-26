import { Component } from '@angular/core';
import { ConstructorService } from './constructor.service';

@Component({
	templateUrl: './constructor.component.html',
	styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent {
	get templates() {
		return this._cs.templates;
	}
	constructor(private _cs: ConstructorService) {}
}
