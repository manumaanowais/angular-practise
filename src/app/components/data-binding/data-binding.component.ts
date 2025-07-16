import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.less'
})
export class DataBindingComponent {
  title = 'Hello World from TS file';
  input1: string = "";
  input2: string = "";

  eventBinding(): void {
    alert("Click event called from event binding");
  }
}
