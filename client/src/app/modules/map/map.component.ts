import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Component({
	selector: 'wmap',
	templateUrl: './map.component.html',
	styleUrls: ['./map.component.scss']
})
export class MapComponent {
	@Output() map_clicked: EventEmitter<any> = new EventEmitter();

	@Input() markers: any = [];

	@Input() select = false;

	@Input() lat: number;

	@Input() lng: number;

	zoom: number = 13;

	minZoom: number = 2;

	default_lat: number = 51.673858;

	default_lng: number = 7.815982;

	apiLoaded: Observable<boolean>;

	markerOptions: google.maps.MarkerOptions = { draggable: false };

	options: google.maps.MapOptions = {
		center: {
			lat: 43.651070,
			lng: -79.347015
		},
		zoom: 8
	};

	constructor(httpClient: HttpClient) {
		const url = `https://maps.googleapis.com/maps/api/js?key=${environment.google_maps}`;
		this.apiLoaded = httpClient.jsonp(url, 'callback')
			.pipe(map(() => true), catchError(() => of(false)));
	}

	clickMap(coords: any) {
		this.lat = coords.lat;

		this.lng = coords.lng;

		this.map_clicked.emit(coords);
	}
}

// import { Component, EventEmitter, Input, Output } from '@angular/core';
// @Component({
// 	selector: 'wmap',
// 	templateUrl: './map.component.html',
// 	styleUrls: ['./map.component.scss']
// })
// export class MapComponent {


// countryRestriction = {
// 	latLngBounds: {
// 		north: 85,
// 		south: -85,
// 		west: -179.99,
// 		east: 179.99,
// 	},
// 	strictBounds: true
// };

// 	constructor() {
// 		navigator.geolocation.getCurrentPosition((success) => {
// 			this.default_lat = success.coords.latitude;

// 			this.default_lng = success.coords.longitude;
// 		});
// 	}
// }
