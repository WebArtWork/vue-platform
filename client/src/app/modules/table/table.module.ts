import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { WacomModule } from 'wacom';
import { TableComponent } from './table.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		WacomModule
	],
	declarations: [
		TableComponent
	],
	providers: [],
	exports: [TableComponent]

})

export class TableModule { }
