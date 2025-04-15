import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLoginComponent } from 'onboarding-common';

@Component({
  selector: 'app-login-web',
  standalone: true,
  imports: [SharedLoginComponent],
  templateUrl: './login-web.component.html',
  styleUrl: './login-web.component.less'
})
export class LoginWebComponent {
  constructor(private router: Router) {}

  onLogin(event: { username: string; password: string }) {
    console.log('Login event:', event);
    localStorage.setItem('Token', 'fake-token-web');
    this.router.navigate(['/dashboard']);
  }
}
