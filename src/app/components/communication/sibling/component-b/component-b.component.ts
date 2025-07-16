import { Component, OnInit } from '@angular/core';
import { SiblingCommunicationService } from '../../../../services/sibling-communication.service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.component.html',
  styleUrl: './component-b.component.less'
})
export class ComponentBComponent implements OnInit{

  dataFromSibling: string = "";

  constructor(private siblingCommunication: SiblingCommunicationService) {
  }
  
  ngOnInit(): void {
    this.siblingCommunication.message$.subscribe(data => this.dataFromSibling = data);
  }
}
