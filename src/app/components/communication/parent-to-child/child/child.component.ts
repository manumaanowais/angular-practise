import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.less'
})
export class ChildComponent {
  @Input() textFromParent!: string;
}
