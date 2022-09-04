import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';
import { FormComponent } from './form/form.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
	imports: [
		CommonModule,
		InputModule,
		ButtonModule
	],
	declarations: [
		ModalComponent,
		FormComponent
	],
	exports: [ FormComponent ],
	providers: []
})

export class FormModule { }
