import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { InputModule } from 'src/app/modules/input/input.module';

@NgModule({
	declarations: [],
	exports: [ /* exports */
		CommonModule,
		FormsModule,
		WacomModule,
		ButtonModule,
		InputModule
	],
	imports: [
		CommonModule,
		FormsModule,
		WacomModule
	]
})
export class CoreModule { }
