import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'reserved-seats',
		loadChildren: () => import('./views/reserved-seats/reserved-seats.module').then((m) => m.AppReservedSeatsModule),
	},
	{
		path: '**',
		redirectTo: 'reserved-seats',
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class InternalRoutingModule {}
