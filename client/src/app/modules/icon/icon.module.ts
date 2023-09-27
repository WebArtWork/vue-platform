import { NgModule } from '@angular/core';
import { IconComponent } from './icon.component';
import { SpiderComponent } from './icons/spider/spider.component';
import { WawifyComponent } from './icons/wawify/wawify.component';


@NgModule({
	declarations: [IconComponent, SpiderComponent, WawifyComponent],
	exports: [IconComponent, SpiderComponent, WawifyComponent]
})
export class IconModule {}
