import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SelectionsListingComponent } from './selections-listing.component';

@NgModule({
	declarations: [SelectionsListingComponent],
	imports: [CommonModule],
	exports: [SelectionsListingComponent],
})
export class AppSelectionsListingModule {}
