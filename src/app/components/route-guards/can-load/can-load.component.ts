import { Component } from '@angular/core';
import { RouterServiceService } from '../../../services/router-service.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-can-load',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './can-load.component.html',
  styleUrl: './can-load.component.less',
})
export class CanLoadComponent {
  constructor(private routerService: RouterServiceService) {

  }

  loadRoutes(): void {
    this.routerService.canLoadRoutes = true;
  }

  unloadRoutes(): void {
    this.routerService.canLoadRoutes = false;
  }
}
