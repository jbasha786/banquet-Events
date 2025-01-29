import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DefaultService } from '../../../services/default.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-upcoming-events-list',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './upcoming-events-list.component.html',
  styleUrl: './upcoming-events-list.component.scss'
})
export class UpcomingEventsListComponent {

  promotionsInfo: any;
  constructor(private defaultService: DefaultService) {
    this.getInitialData();
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.promotionsInfo = result?.promotions;
    });
  }

}
