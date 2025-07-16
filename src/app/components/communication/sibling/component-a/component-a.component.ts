import { Component } from '@angular/core';
import { SiblingCommunicationService } from '../../../../services/sibling-communication.service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.component.html',
  styleUrl: './component-a.component.less'
})
export class ComponentAComponent {

  constructor(private siblingCommunication: SiblingCommunicationService) {

  }

  sendMessageToSibling(): void {
    this.siblingCommunication.sendMessage("Hello I am your sibling, from Component A.");
  }
}
