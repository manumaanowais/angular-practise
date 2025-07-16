import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiblingCommunicationService {

  private messageSubject: Subject<string> = new Subject<string>;
  message$: Observable<string> = this.messageSubject.asObservable();

  constructor() { }

  sendMessage(msg: string) {
    this.messageSubject.next(msg)
  }  
}
