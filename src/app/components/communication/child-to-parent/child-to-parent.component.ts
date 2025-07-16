import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-child-to-parent',
  imports: [ChildComponent],
  templateUrl: './child-to-parent.component.html',
  styleUrl: './child-to-parent.component.less'
})
export class ChildToParentComponent {
  childContacted(data: string): void {
    alert("Data received from child : " + data);
  }
}
