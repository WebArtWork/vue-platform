import { NgModule } from '@angular/core';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	imports: [],
	declarations: [
		ModalComponent,
		FormComponent
	],
	exports: [ FormComponent ],
	providers: []
})

export class FormsModule { }
