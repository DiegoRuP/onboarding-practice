import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent, LocalStorageService} from 'onboarding-common';
import { AdminUserService } from '../../services/admin-user.service';
import { LoggingService } from 'onboarding-common/lib/services/logging.service';
import { User } from 'onboarding-common/lib/models/user.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  // Propiedades para el Navbar y el Sidebar
  adminUser!: User;
  adminMenuItems = [
    { label: 'Inicio', route: '/dashboard/home', icon: 'bi bi-house' },
    { label: 'Perfil', route: '/dashboard/profile', icon: 'bi bi-person' },
    { label: 'Ajustes', route: '/dashboard/settings', icon: 'bi bi-gear' }
  ];

  constructor(
    private adminUserService: AdminUserService,
    private loggingService: LoggingService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {

    const token = this.localStorageService.get('Token');
    console.log('Token - Admin:', token);

    this.adminUserService.getAdminUser().subscribe((user) => {
      this.adminUser = user;
      this.loggingService.log(`Admin user loaded: ${user.name}`);
    });
  }
}
