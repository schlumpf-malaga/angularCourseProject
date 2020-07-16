import { NgModule } from '@angular/core';
import { SelectionsComponent } from './selections.component';
import { AppSelectionsRoutingModule } from './selections.routing.module';

@NgModule({
	declarations: [SelectionsComponent],
	imports: [AppSelectionsRoutingModule],
})
export class AppSelectionsModule {}
