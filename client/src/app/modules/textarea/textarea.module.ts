import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextareaComponent } from './textarea.component';

@NgModule({
	imports: [FormsModule],
	declarations: [TextareaComponent],
	providers: [],
	exports: [TextareaComponent]
})
export class TextareaModule {}