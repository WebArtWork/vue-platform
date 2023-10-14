import { NgModule } from '@angular/core';
import { FormService } from 'src/app/modules/form/form.service';

@NgModule({
	declarations: [],
	exports: []
})
export class FormcomponentsModule {	
	constructor(private _form: FormService) {	
}
}
