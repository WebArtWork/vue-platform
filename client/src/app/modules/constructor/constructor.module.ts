import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConstructorComponent } from './constructor.component';
import { WacomModule } from 'wacom';
import { ButtonModule } from 'src/app/modules/button/button.module';

const routes: Routes = [
	{
		path: '',
		component: ConstructorComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CommonModule,
		ButtonModule,
		FormsModule,
		WacomModule
	],
	declarations: [ConstructorComponent],
	providers: []
})
export class ConstructorModule {}
