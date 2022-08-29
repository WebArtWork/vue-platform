import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { ProfileComponent } from './profile.component';
import { Routes, RouterModule } from '@angular/router';
import { SecurityComponent } from './security/security.component';
import { ButtonModule } from 'src/app/modules/button/button.module';
import { InputModule } from 'src/app/modules/input/input.module';

const routes: Routes = [{
	path: '',
	component: ProfileComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule,
		ButtonModule,
		InputModule
	],
	declarations: [
		ProfileComponent,
		SecurityComponent
	],
	providers: []

})

export class ProfileModule { }
