import {
	Any,
	MongoService,
	FileService,
	HttpService,
	AlertService
} from 'wacom';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { User } from 'src/app/core';

interface AnyUser {
	[key: string]: User;
}

@Injectable({
	providedIn: 'root'
})
export class UserService {
	user: User = this.new();

	roles = ['admin'];

	users: User[] = [];

	_users: AnyUser = {};

	constructor(
		private alert: AlertService,
		private mongo: MongoService,
		private http: HttpService,
		private file: FileService,
		private router: Router
	) {
		this.file.add({
			id: 'userAvatarUrl',
			resize: 256,
			part: 'user',
			cb: (file: string | File) => {
				if (typeof file != 'string') return;

				this.user.thumb = file;
			}
		});

		this.mongo.config('user', {
			replace: {
				data: (data: Any, cb: (data: Any) => Any) => {
					if (typeof data != 'object') data = {};

					cb(data);
				},
				is: this.mongo.beObj
			}
		});

		if (localStorage.getItem('waw_user')) {
			this.user = this.mongo.fetch(
				'user',
				{
					name: 'me'
				},
				(user: User) => {
					if (user) {
						this.user = user;

						localStorage.setItem('waw_user', JSON.stringify(user));
					} else {
						this.logout();
					}
				}
			);
		}

		this.users = this.mongo.get('user', (users: User[], obj: AnyUser) => {
			this._users = obj;
		});
	}

	new(): User {
		return {
			name: '',
			email: '',
			thumb: '',
			is: {},
			data: {}
		};
	}

	create(user: User): void {
		this.mongo.create('user', user);
	}

	doc(userId: string): User {
		if (!this._users[userId]) {
			this._users[userId] = this.mongo.fetch('user', {
				query: { _id: userId }
			});
		}

		return this._users[userId];
	}

	update(): void {
		this.mongo.afterWhile(this, () => {
			this.mongo.update('user', this.user);
		});
	}

	save(user: User): void {
		this.mongo.afterWhile(this, () => {
			this.mongo.update('user', user, {
				name: 'admin'
			});
		});
	}

	delete(user: User): void {
		this.mongo.delete('user', user, {
			name: 'admin'
		});
	}

	change_password(oldPass: string, newPass: string): void {
		this.http.post(
			'/api/user/changePassword',
			{
				newPass: newPass,
				oldPass: oldPass
			},
			(resp) => {
				if (resp) {
					this.alert.info({
						text: 'Successfully changed password'
					});
				} else {
					this.alert.error({
						text: 'Failed to change password'
					});
				}
			}
		);
	}

	logout(): void {
		this.user = this.new();

		localStorage.removeItem('waw_user');

		this.router.navigateByUrl('/sign');

		this.http.remove('token');
	}
}
