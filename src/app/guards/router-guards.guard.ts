import { Injectable } from "@angular/core";
import { CanActivate, CanLoad, CanMatch, CanDeactivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Route, UrlSegment, CanActivateChild, Resolve } from "@angular/router";
import { RouterServiceService } from "../services/router-service.service";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate, CanActivateChild, CanLoad, CanMatch, CanDeactivate<unknown>, Resolve<any> {

  constructor(private router: Router, private routerService: RouterServiceService, private http: HttpClient) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | UrlTree {
    if (this.routerService.canActivateRoutes) {
      return true;
    }
    return false;
  }

  canActivateChild(): boolean {
    if(this.routerService.canActivateChildRoutes) {
      return true;
    }
    return false;
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    if (this.routerService.canLoadRoutes) {
      return true;
    }
    return false;
  }

  canMatch(
    route: Route,
    segments: UrlSegment[]
  ): boolean {
    return false;
  }

  canDeactivate(
    component: unknown,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean {
    return confirm("Are you sure you want to leave this page?");
  }

  resolve(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
