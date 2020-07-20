import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';
import { Screening } from '@core/interfaces/screening.interface';
import { sampleScheduleData } from './sampleScheduleData';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
	moviesWithScreenings: MovieWithScreenings[];

	ngOnInit(): void {
		this.moviesWithScreenings = sampleScheduleData;
	}
}

interface MovieWithScreenings {
	movie: MovieShort;
	screeningsByDay: ScreeningsThisDay[];
}

interface ScreeningsThisDay {
	dateLabel: string;
	date: string;
	screenings: Screening[];
}
