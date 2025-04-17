import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginWebComponent } from './components/login-web/login-web.component';
import { AuthGuard, NoAuthGuard } from 'onboarding-common';
import { HomeComponent } from './components/dashboard/home/home.component';
import { ProfileComponent } from './components/dashboard/profile/profile.component';
import { SettingsComponent } from './components/dashboard/settings/settings.component';

export const routes: Routes = [
  { path: 'login', 
    component: LoginWebComponent, 
    canActivate: [NoAuthGuard] 
},
  { path: 'dashboard', 
    component: DashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'settings', component: SettingsComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
},
  { path: '**', 
    redirectTo: 'login' 
}
];
