import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
      private router: Router,
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      const credentials = localStorage.getItem('credentials');
      const currentUser = localStorage.getItem('currentUser');
      if (credentials && currentUser) {
          return true;
      }

      this.router.navigate(['/auth']);
      return false;
  }
}