import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { MovieShort } from '@core/interfaces/movie.interface';

@Component({
	selector: 'app-movie-summary-line',
	templateUrl: './movie-summary-line.component.html',
	styleUrls: ['./movie-summary-line.component.scss'],
})
export class MovieSummaryLineComponent {
	@HostBinding() class = 'app-movie-summary-line';

  @Input() movie: MovieShort;
}
