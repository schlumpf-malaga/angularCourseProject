import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import localeDeExtra from '@angular/common/locales/extra/de';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { stubServiceProviders } from '@core/providers/stubService.provider';
import { FooterComponent } from '@shared/components/footer/footer.component';
import { MovieCardComponent } from '@shared/components/movie-card/movie-card.component';
import { MovieSummaryLineComponent } from '@shared/components/movie-summary-line/movie-summary-line.component';
import { WeeklyScreeningsComponent } from '@shared/components/weekly-screenings/weekly-screenings.component';
import { AppComponent } from './app.component';
import { LocationComponent } from './areas/external/views/location/location.component';
import { LoginComponent } from './areas/external/views/login/login.component';
import { ScheduleComponent } from './areas/external/views/schedule/schedule.component';
import { SeatSelectionComponent } from './areas/external/views/seat-selection/seat-selection.component';
import { SelectionsComponent } from './areas/external/views/selections/selections.component';
import { ReservedSeatsComponent } from './areas/internal/views/reserved-seats/reserved-seats.component';
import { HeaderComponent } from './shared/components/header/header.component';

registerLocaleData(localeDe, localeDeExtra);

const routes: Routes = [
	{
		path: '',
		component: ScheduleComponent,
	},
	{
		path: 'seat-selection/:id',
		component: SeatSelectionComponent,
	},
	{
		path: 'location',
		component: LocationComponent,
	},
	{
		path: 'selections',
		component: SelectionsComponent,
	},
	{
		path: 'login',
		component: LoginComponent,
	},
	{
		path: 'internal/reserved-seats',
		component: ReservedSeatsComponent,
	},
	{
		path: '**',
		redirectTo: '',
	},
];

@NgModule({
	declarations: [
		AppComponent,
		FooterComponent,
		HeaderComponent,
		LocationComponent,
		LoginComponent,
		MovieCardComponent,
		MovieSummaryLineComponent,
		ReservedSeatsComponent,
		ScheduleComponent,
		SeatSelectionComponent,
		SelectionsComponent,
		WeeklyScreeningsComponent,
	],
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	providers: [...stubServiceProviders, { provide: LOCALE_ID, useValue: 'de' }],
	bootstrap: [AppComponent],
})
export class AppModule {}
