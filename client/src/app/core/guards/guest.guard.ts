import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class GuestGuard implements CanActivate {
	constructor(private router: Router) {}

	canActivate() {
		if (localStorage.getItem('waw_user')) {
			return this.router.navigate(['/profile']);
		} else {
			return true;
		}
	}
}
