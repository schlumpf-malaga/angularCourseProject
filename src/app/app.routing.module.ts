import { ReservedSeatsComponent } from './areas/internal/views/reserved-seats/reserved-seats.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocationComponent } from './areas/external/views/location/location.component';
import { LoginComponent } from './areas/external/views/login/login.component';
import { ScheduleComponent } from './areas/external/views/schedule/schedule.component';
import { SeatSelectionComponent } from './areas/external/views/seat-selection/seat-selection.component';
import { SelectionsComponent } from './areas/external/views/selections/selections.component';

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
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
