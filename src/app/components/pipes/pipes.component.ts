import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pipes',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.less'
})
export class PipesComponent {

}
