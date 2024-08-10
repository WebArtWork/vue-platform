import { Injectable } from '@angular/core';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService,
	CrudDocument
} from 'wacom';

export interface Component extends CrudDocument {
	name: string;
	description: string;
}

@Injectable({
	providedIn: 'root'
})
export class ComponentService extends CrudService<Component> {
	components: Component[] = [];
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'component'
			},
			_http,
			_store,
			_alert,
			_core
		);
		this.get().subscribe((components: Component[]) =>
			this.components.push(...components)
		);
		_core.on('component_create', (component: Component) => {
			this.components.push(component);
		});
		_core.on('component_delete', (component: Component) => {
			this.components.splice(
				this.components.findIndex((o) => o._id === component._id),
				1
			);
		});
	}
}
