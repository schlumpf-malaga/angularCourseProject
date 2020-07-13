import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Screening } from '@core/interfaces/screening.interface';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
	moviesWithScreenings: MovieWithScreenings[];

	ngOnInit(): void {
		this.moviesWithScreenings = [];
	}
}

interface MovieWithScreenings {
	movie: MovieShort;
	screenings: Screening[];
}
