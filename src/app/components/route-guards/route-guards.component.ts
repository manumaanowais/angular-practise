import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-route-guards',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './route-guards.component.html',
  styleUrl: './route-guards.component.less'
})
export class RouteGuardsComponent {

}
