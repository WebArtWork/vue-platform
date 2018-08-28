import { NgModule } from '@angular/core';
import { ModalComponent } from './components/modal/modal.component';
import { InputComponent } from './components/input/input.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PopupComponent } from './components/popup/popup.component';
import { CommonModule } from '@angular/common'; 
import { ClickOutsideModule } from 'ng-click-outside';
@NgModule({
  imports: [ 
  	CommonModule,
    ClickOutsideModule
  ],
  declarations: [
  	ModalComponent, 
  	InputComponent,
    SpinnerComponent,
    PopupComponent
  ],
  exports: [
  	ModalComponent,
  	InputComponent,
    SpinnerComponent,
    PopupComponent
  ],
  entryComponents:[
    ModalComponent,
    InputComponent,
    SpinnerComponent,
    PopupComponent
  ]
})
export class WacomModule { }
