import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { LoginAdminComponent } from './components/login-admin/login-admin.component';

export const routes: Routes = [
    {
        path: 'dashboard', 
        canActivate: [AdminGuard],
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
    },
    {
        path: 'login',
        component: LoginAdminComponent
    },
    {
        path: '**', redirectTo: 'login',
    }
];
