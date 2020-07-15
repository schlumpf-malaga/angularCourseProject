import { Component, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
	@HostBinding() class = 'app-login';
}
