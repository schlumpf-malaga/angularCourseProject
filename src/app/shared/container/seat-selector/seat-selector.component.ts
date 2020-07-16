import { ChangeDetectionStrategy, Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';

@Component({
	selector: 'app-seat-selector',
	templateUrl: './seat-selector.component.html',
	styleUrls: ['./seat-selector.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectorComponent implements OnChanges {
	@HostBinding() class = 'app-seat-selector';

	@Input() screening: Screening;
	@Input() theater: Theater;
	@Input() reservations: Reservation[];
	@Input() selections: Reservation[];

	rowsOfSeats: RowData[];

	seatStyle: Record<number, Record<string, string>>;

	ngOnChanges(changes: SimpleChanges) {
		if (!this.rowsOfSeats) {
			this._setRowOfSeats();
		}

		if (changes.selections?.currentValue) {
			this._onChange_selections(changes.selections.currentValue);
		}
		if (changes.reservations?.currentValue) {
			this._onChange_reservations(changes.reservations.currentValue);
		}
	}

	private _onChange_selections(selections: Reservation[]) {
		this.rowsOfSeats.forEach((row) => {
			row.seats.forEach((seat) => {
				seat.isSelected = selections.some((s) => {
					return s.rowId === row.id && s.seatId === seat.id;
				});
			});
		});
	}

	private _onChange_reservations(reservations: Reservation[]) {
		this.rowsOfSeats.forEach((row) => {
			row.seats.forEach((seat) => {
				seat.isReserved = reservations.some((s) => {
					return s.rowId === row.id && s.seatId === seat.id;
				});
			});
		});
	}

	private _setRowOfSeats() {
		const rowsOfSeats: RowData[] = [];

		for (let rowId = 1; rowId <= this.theater.rows; rowId++) {
			const row: RowData = {
				id: rowId,
				seats: [],
			};

			for (let seatId = 1; seatId <= this.theater.seatsInRows; seatId++) {
				row.seats.push({
					id: seatId,
					isReserved: false,
					isSelected: false,
					ngStyle: this._generateSeatNgStyle(seatId),
				});
			}

			rowsOfSeats.push(row);
		}

		this.rowsOfSeats = rowsOfSeats;
	}

	private _generateSeatNgStyle(seatId: number): {} {
		const parabelX = (seatId - 1) / this.theater.seatsInRows;

		const parabelY = -4 * parabelX ** 2 + 4 * parabelX; // parabel with constrictions: [0,0], [0.5,1], [1,0]

		const translationY = Math.ceil(parabelY * 10);
		const rotationZ = Math.floor((1 - parabelY) * 7) * (parabelX > 0.5 ? -1 : 1);

		const transform = `translateY(${translationY}px) rotateZ(${rotationZ}deg)`;

		return { transform };
	}
}

interface RowData {
	id: number;
	seats: SeatData[];
}

interface SeatData {
	id: number;
	isReserved: boolean;
	isSelected: boolean;
	ngStyle: {};
}
