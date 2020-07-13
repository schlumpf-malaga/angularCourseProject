import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ScheduleComponent } from './areas/external/views/schedule/schedule.component';
import { WeeklyScreeningsComponent } from './shared/components/weekly-screenings/weekly-screenings.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';

@NgModule({
	declarations: [AppComponent, ScheduleComponent, WeeklyScreeningsComponent, HeaderComponent, FooterComponent],
	imports: [BrowserModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
