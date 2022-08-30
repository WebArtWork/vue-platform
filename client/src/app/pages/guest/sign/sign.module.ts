import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { SignComponent } from './sign.component';
import { Routes, RouterModule } from '@angular/router';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { InputModule } from 'src/app/modules/input/input.module';

const routes: Routes = [{
	path: '',
	component: SignComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule,
		ButtonModule,
		InputModule
	],
	declarations: [
		SignComponent
	],
	providers: []

})

export class SignModule { }
