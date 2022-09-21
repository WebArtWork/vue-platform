import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from 'src/app/core';

@Component({
	templateUrl: './security.component.html',
	styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit, OnDestroy {
	oldPass = '';

	newPass = '';

	constructor(public us: UserService) {}

	close: () => void;

	ngOnInit(): void {
		document.body.classList.add('_modal-small');
	}

	ngOnDestroy(): void {
		document.body.classList.remove('_modal-small');
	}
}
