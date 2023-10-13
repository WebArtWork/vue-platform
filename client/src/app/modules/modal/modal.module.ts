import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ModalComponent } from './modal.component';
import { CommonModule } from '@angular/common';


@NgModule({
	imports: [CoreModule, CommonModule],
	declarations: [ModalComponent],
	exports: [ModalComponent],
	providers: []
})
export class ModalModule {}
