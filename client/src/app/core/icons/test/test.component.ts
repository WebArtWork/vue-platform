import { Component } from '@angular/core';
@Component({
	selector: 'test-icon',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent {
	@Input() color = 'black';
}
