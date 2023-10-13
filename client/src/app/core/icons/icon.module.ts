import { NgModule } from '@angular/core';
import { SpiderComponent } from './spider/spider.component';
import { WawifyComponent } from './wawify/wawify.component';
import { TestComponent } from './test/test.component';


@NgModule({
	declarations: [SpiderComponent, WawifyComponent, TestComponent],
	exports: [SpiderComponent, WawifyComponent]
})
export class IconModule {}
