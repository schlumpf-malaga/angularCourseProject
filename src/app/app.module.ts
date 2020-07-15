import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MovieCardComponent } from '@shared/components/movie-card/movie-card.component';
import { MovieSummaryLineComponent } from '@shared/components/movie-summary-line/movie-summary-line.component';
import { WeeklyScreeningsComponent } from '@shared/components/weekly-screenings/weekly-screenings.component';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './areas/external/views/schedule/schedule.component';

@NgModule({
	declarations: [
		AppComponent,
		ScheduleComponent,
		WeeklyScreeningsComponent,
		FooterComponent,
		MovieSummaryLineComponent,
		MovieCardComponent,
	],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
