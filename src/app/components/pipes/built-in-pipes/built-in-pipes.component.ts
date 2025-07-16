import { AsyncPipe, CurrencyPipe, DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { interval, map, Observable } from 'rxjs';

@Component({
  selector: 'app-built-in-pipes',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, JsonPipe, DatePipe, CurrencyPipe, PercentPipe, DecimalPipe, SlicePipe, AsyncPipe],
  templateUrl: './built-in-pipes.component.html',
  styleUrl: './built-in-pipes.component.less'
})
export class BuiltInPipesComponent {
  originalText: string = "Hello world";
  originalJson: object = {
    name: "Numaan Owais",
    age: 24
  }
  originalDate: Date = new Date();
  originalCurrency : number = 50;
  originalPercent: number = 0.25;
  originalNumber: number = 5.123456789;
  newDate: Observable<Date> = new Observable<Date>;

  constructor() {
    this.newDate = interval(1000).pipe(map(() => new Date()));
  }
}
