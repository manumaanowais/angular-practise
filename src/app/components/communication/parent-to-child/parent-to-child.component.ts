import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-parent-to-child',
  imports: [ChildComponent],
  templateUrl: './parent-to-child.component.html',
  styleUrl: './parent-to-child.component.less'
})
export class ParentToChildComponent {

}
