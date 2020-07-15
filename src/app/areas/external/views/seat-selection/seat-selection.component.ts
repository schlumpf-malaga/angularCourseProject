import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-seat-selection',
	templateUrl: './seat-selection.component.html',
	styleUrls: ['./seat-selection.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionComponent {
	@HostBinding() class = 'app-seat-selection';
}
