import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthGuard } from 'onboarding-common'; // Ajusta si usas paths absolutos
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authGuard: AuthGuard) {}

  canActivate(): boolean {
    const isAuthenticated = this.authGuard.canActivate();
    return this.validateAdmin(isAuthenticated);
  }

  private validateAdmin(authPassed: boolean): boolean {
    if (!authPassed) return false;

    const username = localStorage.getItem('User');
    const isAdmin = username?.includes('ad');

    if (!isAdmin) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
