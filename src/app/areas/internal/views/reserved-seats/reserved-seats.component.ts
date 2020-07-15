import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
	selector: 'app-reserved-seats',
	templateUrl: './reserved-seats.component.html',
	styleUrls: ['./reserved-seats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservedSeatsComponent {
	@HostBinding() class = 'app-reserved-seats';
}
