import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedLoginComponent, LocalStorageService } from 'onboarding-common';

@Component({
  selector: 'app-login-web',
  standalone: true,
  imports: [SharedLoginComponent],
  templateUrl: './login-web.component.html',
  styleUrl: './login-web.component.less'
})
export class LoginWebComponent {
  constructor(private router: Router, private localStorageService: LocalStorageService) {}

  onLogin(event: { username: string; password: string; age?: number }) {
    if (event.age && event.age >= 18) {
      this.localStorageService.set('Token', 'user-token');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Debes ser mayor de edad para continuar.');
    }
  }
  
}
