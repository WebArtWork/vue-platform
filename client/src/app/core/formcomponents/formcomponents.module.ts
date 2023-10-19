import { FormService } from 'src/app/modules/form/form.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* modules */
import { InputModule } from 'src/app/modules/input/input.module';
import { ButtonModule } from 'src/app/modules/button/button.module';
/* componnets */
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { PasswordComponent } from './password/password.component';

@NgModule({
	imports: [
		InputModule,
		ButtonModule,
		CommonModule
	],
	declarations: [
		/* declarations */
		PasswordComponent,
		TextComponent,
  		ButtonComponent
	]
})
export class FormcomponentsModule {
	constructor(private _form: FormService) {
		/* addComponents */
		this._form.addComponentTemp({
			component: TextComponent,
			name: 'Text'
		});
		this._form.addComponentTemp({
			component: ButtonComponent,
			name: 'Button'
		});
		this._form.addComponentTemp({
			component: PasswordComponent,
			name: 'Password'
		});
	}
}
