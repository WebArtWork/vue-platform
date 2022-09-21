import { TableComponent } from './table.component';
import { FormModule } from '../form/form.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { WacomModule } from 'wacom';

@NgModule({
	imports: [CommonModule, FormsModule, WacomModule, FormModule],
	declarations: [TableComponent],
	providers: [],
	exports: [TableComponent]
})
export class TableModule {}
