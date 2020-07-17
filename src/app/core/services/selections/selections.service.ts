import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SelectionsService {
	getSelections(): Observable<Reservation[]> {
		return of([]);
	}

	addSelection(reservation: Reservation): void {}

	removeSelection(reservation: Reservation): void {}

	removeSelectionsByScreeningId(screeningId: string): void {}

	toggleSelection(reservation: Reservation): void {}

	clearSelections(): void {}
}
