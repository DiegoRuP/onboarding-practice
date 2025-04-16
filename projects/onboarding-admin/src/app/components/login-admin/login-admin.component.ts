import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLoginComponent, LocalStorageService } from 'onboarding-common';

@Component({
  selector: 'app-login-admin',
  imports: [SharedLoginComponent],
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.less'
})
export class LoginAdminComponent {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  onLogin(event: { username: string; password: string }) {
    if (event.username.includes('ad')) {
      this.localStorageService.set('Token', 'admin-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Acceso restringido solo para administradores.');
    }
  }
}
