import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGuard } from 'onboarding-common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebGuard implements CanActivate {
  constructor(private router: Router, private authGuard: AuthGuard) {}

  canActivate(): boolean {
    const isAuthenticated = this.authGuard.canActivate();
    return this.validateWebUser(isAuthenticated);
  }

  private validateWebUser(authPassed: boolean): boolean {
    if (!authPassed) return false;

    const age = parseInt(localStorage.getItem('Age') || '0', 10);
    const isAdult = !isNaN(age) && age >= 18;

    if (!isAdult) {
      return false;
    }

    return true;
  }
}
