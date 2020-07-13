import { MovieShort } from '@core/interfaces/movie.interface';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
	selector: 'app-movie-card',
	templateUrl: './movie-card.component.html',
	styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
	@HostBinding() class = 'app-movie-card';

	@Input() movie: MovieShort;
}
