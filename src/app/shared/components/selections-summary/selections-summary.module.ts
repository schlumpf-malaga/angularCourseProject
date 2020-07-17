import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SelectionsSummaryComponent } from './selections-summary.component';

@NgModule({
	declarations: [SelectionsSummaryComponent],
	imports: [CommonModule, RouterModule],
	exports: [SelectionsSummaryComponent],
})
export class AppSelectionsSummaryModule {}
