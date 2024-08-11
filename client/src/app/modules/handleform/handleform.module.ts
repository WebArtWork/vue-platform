import { NgModule } from '@angular/core';
import { HandleformComponent } from './handleform.component';
import { FormComponentComponent } from './form-component/form-component.component';

@NgModule({
	declarations: [
		HandleformComponent,
		FormComponentComponent
	],
	exports: [
		HandleformComponent
	]
})

export class HandleformModule {}
