import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-communication',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './communication.component.html',
  styleUrl: './communication.component.less'
})
export class CommunicationComponent {

}
