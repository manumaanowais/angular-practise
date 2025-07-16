import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.less'
})
export class ChildComponent {
  @Output() buttonClicked: EventEmitter<string> = new EventEmitter<string>;
  dataToSend: string = "Hello Parnent, this data is from child!";

  contactParent(data: string): void {
    console.log("Communicating with parent using event emitter and output decorator");
    this.buttonClicked.emit(data);
  }
}
