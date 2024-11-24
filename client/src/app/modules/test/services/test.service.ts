import { Injectable } from '@angular/core';
import { Test } from '../interfaces/test.interface';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService
} from 'wacom';

@Injectable({
	providedIn: 'root',
})
export class TestService extends CrudService<Test> {
	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'test',
			},
			_http,
			_store,
			_alert,
			_core
		);
	}
}
