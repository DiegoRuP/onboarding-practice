// projects/onboarding-common/src/lib/guards/auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable({
  providedIn: 'root'
})

export class NoAuthGuard implements CanActivate {
  constructor(
    private router: Router, 
    private localStorageService: LocalStorageService 
  ) {}

  canActivate(): boolean {
    const token = this.localStorageService.get('Token');
    if (token) {
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true;
  }
}
