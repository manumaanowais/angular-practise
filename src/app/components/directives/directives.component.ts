import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from "@angular/router";

@Component({
  selector: 'app-directives',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.less'
})
export class DirectivesComponent {

}
