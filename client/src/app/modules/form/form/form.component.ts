import { Component, OnInit, EventEmitter, Input, Output  } from '@angular/core';

import { FormService } from 'src/app/modules/forms/form.service';

@Component({
	selector: 'wform',
	templateUrl: './form.component.html',
	styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
	@Input() config: any = {};
	@Input() doc: any = {};
	@Output("submit") modal: EventEmitter<any> = new EventEmitter();

	constructor(public fm:FormService) {}
	ngOnInit(): void {
	}

}
