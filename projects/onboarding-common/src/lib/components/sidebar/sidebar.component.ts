import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuItem } from '../../models/menu-item.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'onboarding-common-sidebar',
  standalone: true,
  imports: [CommonModule, NgbCollapseModule,RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent {
  @Input() menuItems: MenuItem[] = [];
  
  // Controla si el sidebar está colapsado (para dispositivos móviles)
  public isCollapsed: boolean = false;
}
