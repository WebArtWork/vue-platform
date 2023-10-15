import { FormService } from 'src/app/modules/form/form.service';
import { NgModule, Type } from '@angular/core';
import { TextComponent } from './text/text.component';

const formcomponents: Type<unknown>[] = [
	/* formcomponents */
	TextComponent,
]

@NgModule({
	declarations: formcomponents
})
export class FormcomponentsModule {
	constructor(private _form: FormService) {
		/*  */
		// formcomponents.forEach(formcomponent => {});
		// _form.addComponentTemp({

		// })
	}
}
