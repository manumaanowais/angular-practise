import { Component } from '@angular/core';
import { NotFoundComponent } from "../../not-found/not-found.component";

@Component({
  selector: 'app-component-directives',
  imports: [NotFoundComponent],
  templateUrl: './component-directives.component.html',
  styleUrl: './component-directives.component.less'
})
export class ComponentDirectivesComponent {

}
