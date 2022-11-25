import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService, StoreService } from 'wacom';

interface CrudOptions {
	replace: string;
	query: string;
	group: string;
}

@Injectable({
	providedIn: 'root'
})
export default abstract class CrudService<Document> {
	constructor(
		private _url: string,
		private _http: HttpService,
		private _store: StoreService
	) { }
	/*
		doc should be able to:
			1) stored locally
			2) send into back-end into different ways [http,socket]
			3) have temporary id {MODULE_Date.now()}
			4) work as MongoService via read function
	*/
	create(module: string, doc: Document): Observable<Document> {
		const obs = this._http.get(this._url);
		return obs;
	}

	read(module: string, opts: CrudOptions): Observable<Document> {
		const obs = this._http.get(this._url);
		return obs;
	}

	update(module: string, doc: Document): Observable<Document> {
		const obs = this._http.get(this._url);
		return obs;
	}

	delete(module: string, doc: Document): Observable<Document> {
		const obs = this._http.get(this._url);
		return obs;
	}

	set(module: string, doc: Document): void {}

	// get(module: string, id: string): Document {}
	// getAll(module: string): Document[] {}
}


/*
interface User {
	email: string;
	phone: string;
}

@Injectable({
	providedIn: 'root'
})
export class UserService extends CrudService<User> {
	constructor(
		private _http: HttpClient,
		private _store: StoreService
	) {
		super('/api/user', _http, _store);
		super('/api/user'); // would be nice to have this line
		super('user'); // we can put `/api/` into crud service, but I believe it's bad idea
	}
}
*/
