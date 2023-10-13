import { NgModule } from '@angular/core';
import { SpiderComponent } from './spider/spider.component';
import { WawifyComponent } from './wawify/wawify.component';

@NgModule({
	declarations: [SpiderComponent, WawifyComponent],
	exports: [SpiderComponent, WawifyComponent]
})
export class IconsModule {}
