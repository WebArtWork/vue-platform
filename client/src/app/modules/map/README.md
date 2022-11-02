# ngx-map

## In termianl /your_project/client install agm:
```
npm i --save @agm/core@1.1.0
```
## In termianl /your_project/client install map module:
```
waw add ngx-map
```
## In your_project/client/src/environments/enviroment.ts and environment.prod.ts
in const environment={
create property : " use your google map key " }
```
your_property: 'your_google_map_key'
```
## In your_project/client/src/app/modules/map/map.module.ts
replace property google_maps on your your_property
  ```
@NgModule({
	imports: [
		AgmCoreModule.forRoot({
			apiKey: environment.your_property
		  }),
	],
  ```

## In your_project/client/src/app/modules/map/map.component.scss
use your scss property ^_^
```
agm-map{
}
```
## Your_page.module.ts
import map module to your page
```
import { MapModule } from 'src/app/modules';
@NgModule({
	imports: [
		MapModule
	],
})
```
## Your_page.component.html
for use this module use tag ```<wmap></wmap> ```
```
<wmap (mapClick)="$event.coords" [markers]="[ {lat:lat, lng:lng, icon: 'assets/logo.png', icon_width: 50, click: clicked}]" [select]="true" (map_clicked)="map_clicked($event)"></wmap>
```
merker icon
```
icon: 'path to your file',
```
marker_width
```
icon_width: 50    (your option in px)
```
## Your_page.component.ts
```

	public lat: number = 50.673858;
	public lng: number = 7.815982;
		map_clicked(coords){
		console.log(coords);		
	}
	clicked(marker){		
	}
```
