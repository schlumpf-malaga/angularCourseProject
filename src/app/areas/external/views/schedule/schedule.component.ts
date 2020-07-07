import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MovieShort } from 'src/app/core/interface/movie.interface';
import { Screening } from 'src/app/core/interface/screening.interface';
import { sampleSheduleData } from './sampleScheduleData';

@Component({
	selector: 'app-schedule',
	templateUrl: './schedule.component.html',
	styleUrls: ['./schedule.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScheduleComponent implements OnInit {
	moviesWithScreenings: MovieWithScreenings[];

	ngOnInit(): void {
		this.moviesWithScreenings = sampleSheduleData;
	}
}

interface MovieWithScreenings {
	movie: MovieShort;
	screenings: Screening[];
}
