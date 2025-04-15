import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { User } from '../../models/user.model';


@Component({
  selector: 'onboarding-common-navbar',
  standalone: true,
  imports: [CommonModule, NgbDropdownModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent {
  @Input() user?: User;
}
