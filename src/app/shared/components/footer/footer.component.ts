import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
	@HostBinding() class = 'app-footer';
}
