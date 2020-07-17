import { AppReservationsToStringModule } from './../../pipes/reservations-to-string/reservations-to-string.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectionsSummaryComponent } from './selections-summary.component';

@NgModule({
	declarations: [SelectionsSummaryComponent],
	imports: [AppReservationsToStringModule, CommonModule, RouterModule],
	exports: [SelectionsSummaryComponent],
})
export class AppSelectionsSummaryModule {}
