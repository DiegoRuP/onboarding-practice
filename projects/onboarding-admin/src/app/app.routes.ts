import { Routes } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [
    {
        path: 'dashboard', 
        canActivate: [AdminGuard],
        loadComponent: () =>
          import('./components/dashboard/dashboard.component').then(m => m.DashboardComponent)
    }
];
