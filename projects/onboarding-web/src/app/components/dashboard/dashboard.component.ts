import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent } from 'onboarding-common';
import { ContentService } from '../../services/content.service';
import { LoggingService } from 'onboarding-common/lib/services/logging.service';
import { Content } from 'onboarding-common/lib/models/content.model';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent],
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
    { label: 'Inicio', route: '/inicio', icon: 'bi bi-house' },
    { label: 'Perfil', route: '/perfil', icon: 'bi bi-person' },
    { label: 'Ajustes', route: '/ajustes', icon: 'bi bi-gear' }
  ];

  contents: Content[] = [];

  constructor(
    private contentService: ContentService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe((data) => {
      this.contents = data;
      this.loggingService.log('Contenido cargado en el dashboard web');
    });
  }
}
