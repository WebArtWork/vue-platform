import { Component } from '@angular/core';
import { ConstructorService } from './constructor.service';

@Component({
	templateUrl: './constructor.component.html',
	styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent {
	template(name: string) {
		return this.cs.templates[
			this.cs.templates.map((t) => t.name).indexOf(name)
		];
	}
	constructor(public cs: ConstructorService) {}
}
