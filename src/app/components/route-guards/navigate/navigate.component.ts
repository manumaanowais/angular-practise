import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigate',
  imports: [],
  templateUrl: './navigate.component.html',
  styleUrl: './navigate.component.less'
})
export class NavigateComponent {

  constructor(private router: Router) {}
  
  navigateToInterceptors(): void {
    this.router.navigate(["/interceptors"]);
  }
}
