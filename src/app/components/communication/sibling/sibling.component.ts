import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-sibling',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './sibling.component.html',
  styleUrl: './sibling.component.less'
})
export class SiblingComponent {

}
