import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      console.log("AuthGuard#canActivate called!");

      let url: string = state.url;

      return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    // throw new Error("Method not implemented.");
    if(this.authService.isLoggedIn) {
      return true;
    }

    // store the attempted URL for redirecting
    this.authService.redirectUrl = url;
    this.router.navigate(['/login']);
    return false;
  }
}
