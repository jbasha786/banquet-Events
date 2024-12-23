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
  customOptionsforPromotionsInfo: OwlOptions = {
    loop: true,
    dots: false,
    nav: false,
    center: false,
    slideTransition: 'linear',
    items: 4,
    margin: 20,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  constructor(private defaultService: DefaultService) {
    this.getInitialData();
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.promotionsInfo = result?.promotions;
    });
  }

}
