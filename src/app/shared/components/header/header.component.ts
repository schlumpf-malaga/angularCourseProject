import { ChangeDetectionStrategy, Component, HostBinding, OnInit } from '@angular/core';
import { SelectionsService } from '@core/services/selections/selections.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {
	@HostBinding() class = 'app-header';

	amountOfSelections$: Observable<number>;

	constructor(private _selectionsService: SelectionsService) {}

	ngOnInit() {
		this.amountOfSelections$ = this._selectionsService.getSelections().pipe(
			map((selections) => {
				return selections.length;
			})
		);
	}
}
