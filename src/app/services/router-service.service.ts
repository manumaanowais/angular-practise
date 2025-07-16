import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RouterServiceService {

  canActivateRoutes: boolean = true;
  canActivateChildRoutes: boolean = true;
  canLoadRoutes: boolean = true;

  constructor() { }
}
