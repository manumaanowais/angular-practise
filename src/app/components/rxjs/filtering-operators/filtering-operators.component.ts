import { Component } from '@angular/core';
import { of, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-filtering-operators',
  imports: [],
  templateUrl: './filtering-operators.component.html',
  styleUrl: './filtering-operators.component.less'
})
export class FilteringOperatorsComponent {
  constructor() {
    of(1, 1, 2, 2, 3, 3, 3, 1,2, 1,1,2).pipe(
    distinctUntilChanged()
    ).subscribe(console.log);
  }
}
