import { Injectable } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class SelectionsService {
	selectedReservations = new BehaviorSubject<Reservation[]>([]);

	getSelections(): Observable<Reservation[]> {
		return this.selectedReservations.asObservable();
	}

	addSelection(reservation: Reservation) {
		this.selectedReservations.next([...this.selectedReservations.value, reservation]);
	}

	removeSelection(reservation: Reservation) {
		this.selectedReservations.next(
			this.selectedReservations.value.filter((res) => {
				return !(
					res.screeningId === reservation.screeningId &&
					res.rowId === reservation.rowId &&
					res.seatId === reservation.seatId
				);
			})
		);
	}

	removeSelectionsByScreeningId(screeningId: string) {
		this.selectedReservations.next(
			this.selectedReservations.value.filter((res) => {
				return res.screeningId !== screeningId;
			})
		);
	}

	toggleSelection(reservation: Reservation) {
		if (
			this.selectedReservations.value.find((res) => {
				return (
					res.screeningId === reservation.screeningId &&
					res.rowId === reservation.rowId &&
					res.seatId === reservation.seatId
				);
			})
		) {
			this.removeSelection(reservation);
		} else {
			this.addSelection(reservation);
		}
	}

	clearSelections() {
		this.selectedReservations.next([]);
	}
}
