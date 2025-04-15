import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent } from 'onboarding-common';
import { AdminUserService } from '../../services/admin-user.service';
import { LoggingService } from 'onboarding-common/lib/services/logging.service';
import { User } from 'onboarding-common/lib/models/user.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  // Propiedades para el Navbar y el Sidebar
  adminUser!: User;
  adminMenuItems = [
    { label: 'Dashboard', route: '/dashboard', icon: 'bi bi-house' },
    { label: 'Usuarios', route: '/usuarios', icon: 'bi bi-people' },
    { label: 'Configuración', route: '/configuracion', icon: 'bi bi-gear' }
  ];

  constructor(
    private adminUserService: AdminUserService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.adminUserService.getAdminUser().subscribe((user) => {
      this.adminUser = user;
      this.loggingService.log(`Admin user loaded: ${user.name}`);
    });
  }
}
