import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user.model';
import { LocalStorageService } from '../../services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'onboarding-common-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  @Input() user?: User;

  constructor(private localStorageService: LocalStorageService, private router: Router) {}

  logout(): void {
    this.localStorageService.remove('Token');
    this.router.navigate(['/login']);
  }

  navigateToProfile(): void {
    this.router.navigate(['/dashboard/profile']);
  }
}
