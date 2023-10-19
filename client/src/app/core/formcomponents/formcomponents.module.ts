import { ButtonModule } from 'src/app/modules/button/button.module';
import { InputModule } from 'src/app/modules/input/input.module';
import { FormService } from 'src/app/modules/form/form.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* componnets */
import { EmailComponent } from './email/email.component';
import { NumberComponent } from './number/number.component';
import { TimeComponent } from './time/time.component';
import { DateComponent } from './date/date.component';
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
		EmailComponent,
		NumberComponent,
		TimeComponent,
		DateComponent,
		PasswordComponent,
		TextComponent,
  		ButtonComponent
	]
})
export class FormcomponentsModule {
	constructor(private _form: FormService) {
		/* addComponents */
		this._form.addComponent({
			component: EmailComponent,
			name: 'Email',
			fields: []
		});
		this._form.addComponent({
			component: NumberComponent,
			name: 'Number',
			fields: []
		});
		this._form.addComponent({
			component: TimeComponent,
			name: 'Time',
			fields: []
		});
		this._form.addComponent({
			component: DateComponent,
			name: 'Date',
			fields: []
		});
		this._form.addComponent({
			component: TextComponent,
			name: 'Text',
			fields: []
		});
		this._form.addComponent({
			component: ButtonComponent,
			name: 'Button',
			fields: []
		});
		this._form.addComponent({
			component: PasswordComponent,
			name: 'Password',
			fields: []
		});
		this._form.inited = true;
	}
}
