// projects/onboarding-web/src/app/guards/web.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    const hasAccess = true; // Reemplaza con lógica real, ej. suscripción activa, verificación de edad, etc.

    if (!hasAccess) {
      this.router.navigate(['/acceso-denegado']);
      return false;
    }
    return true;
  }
}
