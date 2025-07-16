import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { RouterServiceService } from '../../../services/router-service.service';

@Component({
  selector: 'app-can-activate-child',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './can-activate-child.component.html',
  styleUrl: './can-activate-child.component.less'
})
export class CanActivateChildComponent {
  constructor(private routerService: RouterServiceService) {

  }

  activateChildRoutes(): void {
    this.routerService.canActivateChildRoutes = true;
  }

  deactivateChildRoutes(): void {
    this.routerService.canActivateChildRoutes = false;
  }
}
