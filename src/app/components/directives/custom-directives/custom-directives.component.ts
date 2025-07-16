import { Component } from '@angular/core';
import { HighlightOnHoverDirective } from '../../../directives/highlight-on-hover.directive';

@Component({
  selector: 'app-custom-directives',
  imports: [HighlightOnHoverDirective],
  templateUrl: './custom-directives.component.html',
  styleUrl: './custom-directives.component.less'
})
export class CustomDirectivesComponent {

}
