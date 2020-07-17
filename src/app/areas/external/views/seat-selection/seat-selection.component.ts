import { ChangeDetectionStrategy, Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { theater } from '@core/constants/theater.constant';
import { onToggleSeat_SeatSelector } from '@core/events/onToggleSeat_SeatSelector.interface';
import { MovieLong } from '@core/interfaces/movie.interface';
import { Reservation } from '@core/interfaces/reservation.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { Theater } from '@core/interfaces/theater.interface';
import { MovieService } from '@core/services/movie/movie.service';
import { ReservationService } from '@core/services/reservation/reservation.service';
import { ScreeningsService } from '@core/services/schedule/screenings.service';
import { SelectionsService } from '@core/services/selections/selections.service';
import { forkJoin, Observable, ReplaySubject, Subject } from 'rxjs';
import { concatMap, map, takeUntil } from 'rxjs/operators';

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
		private _reservationService: ReservationService,
		private _selectionsService: SelectionsService
	) {}

	movie$ = new ReplaySubject<MovieLong>(1);
	screening$ = new ReplaySubject<Screening>(1);
	theater: Theater = theater;
	reservations$ = new ReplaySubject<Reservation[]>(1);
	selections$: Observable<Reservation[]>;

	private _destroyed = new Subject<void>();

	ngOnInit(): void {
		this._activatedRoute.params
			.pipe(
				takeUntil(this._destroyed),
				concatMap((params: { screeningId: string }) => {
					return this._screeningsService.getScreeningById(params.screeningId);
				}),
				takeUntil(this._destroyed),
				concatMap((screening: Screening) => {
					this.screening$.next(screening);
					this.screening$.complete();

					this.screening$.subscribe((thisScreening) => {
						this.selections$ = this._selectionsService.getSelections().pipe(
							takeUntil(this._destroyed),
							map((screenings) => {
								return screenings.filter((s) => s.screeningId === thisScreening.id);
							})
						);
					});

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

	onToggleSeat_SeatSelector(event: onToggleSeat_SeatSelector) {
		const { rowId, seatId } = event;

		this.screening$.subscribe((s) => {
			this._selectionsService.toggleSelection({
				screeningId: s.id,
				rowId,
				seatId,
			});
		});
	}

	onResetSelection_SeatSelector() {
		this.screening$.subscribe((s) => {
			this._selectionsService.removeSelectionsByScreeningId(s.id);
		});
	}
}
