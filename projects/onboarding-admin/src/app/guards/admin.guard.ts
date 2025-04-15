// projects/onboarding-admin/src/app/guards/admin.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const isAdmin = true; // Reemplaza esta lógica con la validación real para admin

    if (!isAdmin) {
      this.router.navigate(['/']);
      return false;
    }
    return true;
  }
}
