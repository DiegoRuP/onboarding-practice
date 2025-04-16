import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';
import { AuthGuard, NoAuthGuard } from 'onboarding-common';

export const routes: Routes = [
  { path: 'login', 
    component: LoginAdminComponent, 
    canActivate: [NoAuthGuard] 
},
  { path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard] 
},
  { path: '**', redirectTo: 'login' 

}
];
