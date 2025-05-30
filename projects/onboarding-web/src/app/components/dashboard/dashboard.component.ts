import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent, LocalStorageService } from 'onboarding-common';
import { Content } from 'onboarding-common/lib/models/content.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  // Datos simulados para el Navbar y el Sidebar
  webUser = {
    id: 2,
    name: 'Web User',
    email: 'web@example.com',
    avatarUrl: 'https://via.placeholder.com/40'
  };

  webMenuItems = [
    { label: 'Inicio', route: '/dashboard/home', icon: 'bi bi-house' },
    { label: 'Perfil', route: '/dashboard/profile', icon: 'bi bi-person' },
    { label: 'Ajustes', route: '/dashboard/settings', icon: 'bi bi-gear' }
  ];

  contents: Content[] = [];

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {

    const token = this.localStorageService.get('Token');
    console.log('Token - Web:', token);

  }
}
