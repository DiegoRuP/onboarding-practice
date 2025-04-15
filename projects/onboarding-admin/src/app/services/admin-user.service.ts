// projects/onboarding-admin/src/app/services/admin-user.service.ts
import { Injectable } from '@angular/core';
import { User } from 'onboarding-common/lib/models/user.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {
  // Simula la obtención de datos del usuario admin
  getAdminUser(): Observable<User> {
    const admin: User = {
      id: 1,
      name: 'Admin User',
      email: 'admin@email.com',
    };
    return of(admin);
  }
}
