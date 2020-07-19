import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReservationFormComponent } from './reservation-form.component';

@NgModule({
	declarations: [ReservationFormComponent],
	imports: [CommonModule],
	exports: [ReservationFormComponent],
})
export class AppReservationFormModule {}
