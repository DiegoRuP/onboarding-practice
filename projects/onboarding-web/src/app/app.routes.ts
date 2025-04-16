import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginWebComponent } from './components/login-web/login-web.component';
import { AuthGuard, NoAuthGuard } from 'onboarding-common';

export const routes: Routes = [
  { path: 'login', 
    component: LoginWebComponent, 
    canActivate: [NoAuthGuard] 
},
  { path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
},
  { path: '**', 
    redirectTo: 'login' 
}
];
