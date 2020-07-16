import { NgModule } from '@angular/core';
import { ReservedSeatsComponent } from './reserved-seats.component';
import { AppReservedSeatsRoutingModule } from './reserved-seats.routing.module';

@NgModule({
	declarations: [ReservedSeatsComponent],
	imports: [AppReservedSeatsRoutingModule],
})
export class AppReservedSeatsModule {}
