import { Injectable } from '@angular/core';
import { MongoService, AlertService, HttpService } from 'wacom';

export interface Section {
	folder: string;
	field: Record<string, string>;
	components: {
		folder: string;
		field: Record<string, string>;
	}[];
}

export interface Constructor {
	_id: string;
	name: string;
	template: string;
	domain: string;
	url: string;
	description: string;
	sections: Section[];
}

export interface Template {
	name: string;
	sections: Section[];
}

@Injectable({
	providedIn: 'root'
})
export class ConstructorService {
	templates: Template[] = [];
	constructors: Constructor[] = [];
	_constructors: any = {};

	new(): Constructor {
		const constructor = {} as Constructor;

		constructor.sections = [];

		return constructor;
	}

	new_section(): Section {
		return {
			folder: '',
			field: {},
			components: []
		} as Section;
	}

	constructor(
		private mongo: MongoService,
		private alert: AlertService,
		private _http: HttpService
	) {
		this.constructors = mongo.get(
			'constructor',
			{
				replace: {
					sections: mongo.beArr
				}
			},
			(arr: any, obj: any) => {
				this._constructors = obj;
			}
		);

		this._http.get(
			'/api/constructor',
			(templates) => (this.templates = templates)
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
