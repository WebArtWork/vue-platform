import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { UikitComponent } from './uikit.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: UikitComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		UikitComponent
	],
	providers: []
	
})

export class UikitModule { }
