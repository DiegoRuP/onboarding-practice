import { Routes } from '@angular/router';
import { LoginWebComponent } from './components/login-web/login-web.component';

export const routes: Routes = [
    {
        path: 'dashboard',
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'login',
        component: LoginWebComponent
    },
    {
        path: '**', redirectTo: 'login',
    }
    
];
