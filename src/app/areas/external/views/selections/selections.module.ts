import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMovieCardModule } from '@shared/components/movie-card/movie-card.module';
import { AppSelectionsSummaryModule } from '@shared/components/selections-summary/selections-summary.module';
import { AppReservationFormModule } from '@shared/container/reservation-form/reservation-form.module';
import { SelectionsComponent } from './selections.component';
import { AppSelectionsRoutingModule } from './selections.routing.module';

@NgModule({
	declarations: [SelectionsComponent],
	imports: [AppMovieCardModule, AppReservationFormModule, AppSelectionsRoutingModule, AppSelectionsSummaryModule, CommonModule],
})
export class AppSelectionsModule {}
