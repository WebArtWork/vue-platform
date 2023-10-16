import { FormService } from 'src/app/modules/form/form.service';
import { NgModule, Type } from '@angular/core';
import { TextComponent } from './text/text.component';
import { InputModule } from 'src/app/modules/input/input.module';

@NgModule({
	imports: [
		InputModule
	]
	declarations: [
		/* formcomponents */
		TextComponent,
	]
})
export class FormcomponentsModule {
	constructor(private _form: FormService) {
		console.log(TextComponent);
		_form.addComponentTemp({
			component: TextComponent,
			name: 'Text'
		});
	}
}
