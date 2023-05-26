import { Injectable } from '@angular/core';
import { MongoService, AlertService, HttpService } from 'wacom';

export interface Constructor {
	_id: string;
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class ConstructorService {
	templates = [];
	components = [];
	sections = [];
	constructors: Constructor[] = [];
	_constructors: any = {};

	new(): Constructor {
		return {
			_id: '',
			name: '',
			description: ''
		};
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService,
		private _http: HttpService
	) {
		this.constructors = mongo.get(
			'constructor',
			{},
			(arr: any, obj: any) => {
				this._constructors = obj;
			}
		);

		this._http.get(
			'/api/constructor',
			(resp) => (this.templates = resp.templates)
		);
	}

	create(
		constructor: Constructor = this.new(),
		callback = (created: Constructor) => {},
		text = 'constructor has been created.'
	) {
		if (constructor._id) {
			this.save(constructor);
		} else {
			this.mongo.create(
				'constructor',
				constructor,
				(created: Constructor) => {
					callback(created);

					this.alert.show({ text });
				}
			);
		}
	}

	doc(constructorId: string): Constructor {
		if (!this._constructors[constructorId]) {
			this._constructors[constructorId] = this.mongo.fetch(
				'constructor',
				{
					query: {
						_id: constructorId
					}
				}
			);
		}

		return this._constructors[constructorId];
	}

	update(
		constructor: Constructor,
		callback = (created: Constructor) => {},
		text = 'constructor has been updated.'
	): void {
		this.mongo.afterWhile(constructor, () => {
			this.save(constructor, callback, text);
		});
	}

	save(
		constructor: Constructor,
		callback = (created: Constructor) => {},
		text = 'constructor has been updated.'
	): void {
		this.mongo.update('constructor', constructor, () => {
			if (text) this.alert.show({ text, unique: constructor });
		});
	}

	delete(
		constructor: Constructor,
		callback = (created: Constructor) => {},
		text = 'constructor has been deleted.'
	): void {
		this.mongo.delete('constructor', constructor, () => {
			if (text) this.alert.show({ text });
		});
	}
}
