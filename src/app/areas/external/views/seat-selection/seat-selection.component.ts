import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { theater } from '@core/constants/theater.constant';
import { MovieLong } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { forkJoin, ReplaySubject, Subject } from 'rxjs';
import { concatMap, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-seat-selection',
	templateUrl: './seat-selection.component.html',
	styleUrls: ['./seat-selection.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SeatSelectionComponent implements OnInit, OnDestroy {
	@HostBinding() class = 'app-seat-selection';

	constructor(
		private _activatedRoute: ActivatedRoute,
		private _movieService: MovieService,
		private _screeningsService: ScreeningsService,
		private _reservationService: ReservationService
	) {}

	movie$ = new ReplaySubject<MovieLong>(1);
	screening$ = new ReplaySubject<Screening>(1);
	theater: Theater = theater;
	reservations$ = new ReplaySubject<Reservation[]>(1);
	selections: Reservation[] = [];

	private _destroyed = new Subject<void>();

	ngOnInit(): void {
		this._activatedRoute.params
			.pipe(
				takeUntil(this._destroyed),
				concatMap((params: { screeningId: string }) => {
					this.selections = [
						{ screeningId: params.screeningId, rowId: 4, seatId: 10 },
						{ screeningId: params.screeningId, rowId: 4, seatId: 12 },
					];

					return this._screeningsService.getScreeningById(params.screeningId);
				}),
				takeUntil(this._destroyed),
				concatMap((screening: Screening) => {
					this.screening$.next(screening);
					this.screening$.complete();

					return forkJoin({
						movie: this._movieService.getMovie(screening.movieId),
						reservations: this._reservationService.getReservationsForScreening(screening.id),
					});
				}),
				takeUntil(this._destroyed)
			)
			.subscribe((params: { movie: MovieLong; reservations: Reservation[] }) => {
				const { movie, reservations } = params;

				this.movie$.next(movie);
				this.movie$.complete();

				this.reservations$.next(reservations);
				this.reservations$.complete();
			});
	}

	ngOnDestroy() {
		this._destroyed.next();
		this._destroyed.complete();
	}

	private _addSelection(selection: Reservation) {
		this.selections = [...this.selections, selection];
	}

	private _removeSelection(selectionIndex: number) {
		this.selections = this.selections.filter((_, i) => i !== selectionIndex);
	}

	private _toogleSelection(selection: Reservation) {
		const foundSelectionIndex = this.selections.findIndex((s) => {
			return s.screeningId === selection.screeningId && s.rowId === selection.rowId && s.seatId === selection.seatId;
		});

		if (foundSelectionIndex > -1) {
			this._removeSelection(foundSelectionIndex);
		} else {
			this._addSelection(selection);
		}
	}

	private _resetSelections() {
		this.selections = [];
	}
}
