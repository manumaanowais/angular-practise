import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-forms',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.less'
})
export class FormsComponent {

}
