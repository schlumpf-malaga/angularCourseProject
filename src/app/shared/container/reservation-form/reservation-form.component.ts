import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { onSubmit_reservationForm } from '@core/events/onSubmit_reservationForm';

@Component({
	selector: 'app-reservation-form',
	templateUrl: './reservation-form.component.html',
	styleUrls: ['./reservation-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReservationFormComponent {
	@Output() formSubmit = new EventEmitter<onSubmit_reservationForm>();
}
