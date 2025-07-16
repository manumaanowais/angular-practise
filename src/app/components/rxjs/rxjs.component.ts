import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { interval, skip, take, timer } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './rxjs.component.html',
  styleUrl: './rxjs.component.less'
})
export class RxjsComponent {
  constructor() {
    interval(1000).pipe(skip(5), take(5)).subscribe({
      next: (val) => console.log(val),
      complete: () => console.log("Observable completed")
    });

    // timer(3000, 1000).subscribe(val =>console.log(val)) // after 3 seconds, log values at interval of 1 second.
  }
}
