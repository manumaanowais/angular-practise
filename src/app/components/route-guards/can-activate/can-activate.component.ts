import { Component } from '@angular/core';
import { RouterServiceService } from '../../../services/router-service.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-can-activate',
  imports: [RouterOutlet, RouterLinkActive, RouterLink],
  templateUrl: './can-activate.component.html',
  styleUrl: './can-activate.component.less'
})
export class CanActivateComponent {

  constructor(private routerService: RouterServiceService) {

  }

  activateRoutes(): void {
    this.routerService.canActivateRoutes = true;
  }

  deactivateRoutes(): void {
    this.routerService.canActivateRoutes = false;
  }
}
