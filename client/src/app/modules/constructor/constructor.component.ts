import { Component } from '@angular/core';
import { ConstructorService, Template } from './constructor.service';

@Component({
	templateUrl: './constructor.component.html',
	styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent {
	template(name: string) {
		return this.cs.templates[
			this.cs.templates.map((t) => t.name).indexOf(name)
		] || {} as Template;
	}

	constructor(public cs: ConstructorService) {}
}
