
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentService } from '../../../services/content.service';
import { Content } from 'onboarding-common/lib/models/content.model';
import { LoggingService } from 'onboarding-common/lib/services/logging.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  contents: Content[] = [];

  constructor(
    private contentService: ContentService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.contentService.getContent().subscribe((data) => {
      this.contents = data;
      this.loggingService.log('Contenido cargado en el home');
    });
  }
}