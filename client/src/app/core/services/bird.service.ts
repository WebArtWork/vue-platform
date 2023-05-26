import { Injectable } from '@angular/core';
import { MongoService, AlertService } from 'wacom';

export interface Bird {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class BirdService {
	birds: Bird[] = [];

	_birds: any = {};

	new(): Bird {
		return {
			_id: '',
			name: '',
			description: ''
		};
	}

	constructor(private mongo: MongoService, private alert: AlertService) {
		this.birds = mongo.get('bird', {}, (arr: any, obj: any) => {
			this._birds = obj;
		});
	}

	create(
		bird: Bird = this.new(),
		callback = (created: Bird) => {},
		text = 'bird has been created.'
	) {
		if (bird._id) {
			this.save(bird);
		} else {
			this.mongo.create('bird', bird, (created: Bird) => {
				callback(created);

				this.alert.show({ text });
			});
		}
	}

	doc(birdId: string): Bird {
		if (!this._birds[birdId]) {
			this._birds[birdId] = this.mongo.fetch('bird', {
				query: {
					_id: birdId
				}
			});
		}

		return this._birds[birdId];
	}

	update(
		bird: Bird,
		callback = (created: Bird) => {},
		text = 'bird has been updated.'
	): void {
		this.mongo.afterWhile(bird, () => {
			this.save(bird, callback, text);
		});
	}

	save(
		bird: Bird,
		callback = (created: Bird) => {},
		text = 'bird has been updated.'
	): void {
		this.mongo.update('bird', bird, () => {
			if (text) this.alert.show({ text, unique: bird });
		});
	}

	delete(
		bird: Bird,
		callback = (created: Bird) => {},
		text = 'bird has been deleted.'
	): void {
		this.mongo.delete('bird', bird, () => {
			if (text) this.alert.show({ text });
		});
	}
}
