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
    console.log('Login event:', event);
    this.localStorageService.set('Token', 'fake-token-admin');
    this.router.navigate(['/dashboard']);
  }
}
