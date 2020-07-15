import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-selections',
	templateUrl: './selections.component.html',
	styleUrls: ['./selections.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectionsComponent {
	@HostBinding() class = 'app-selection';
}
