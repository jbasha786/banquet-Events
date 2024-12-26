import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { AmenitiesComponent } from '../shared/components/amenities/amenities.component';
import { ThingsToKnowComponent } from '../shared/components/things-to-know/things-to-know.component';
import { GoogleMapComponent } from '../shared/components/google-map/google-map.component';
import { HostDetailsComponent } from '../booking/overview/host-details/host-details.component';
import { DefaultService } from '../services/default.service';
import { CommonModule } from '@angular/common';
import { UpcomingEventsListComponent } from '../shared/components/upcoming-events-list/upcoming-events-list.component';
import { LiveEventsBookingComponent } from './live-events-booking/live-events-booking.component';

@Component({
  selector: 'app-live-events',
  standalone: true,
  imports: [
    AmenitiesComponent,
    ThingsToKnowComponent,
    GoogleMapComponent,
    HostDetailsComponent,
    UpcomingEventsListComponent,
    LiveEventsBookingComponent,
    MatCardModule,
    MatIconModule,
    CommonModule],
  templateUrl: './live-events.component.html',
  styleUrl: './live-events.component.scss'
})
export class LiveEventsComponent {

  hostDetails: any;
  promotionsInfo: any;

  constructor(private defaultService: DefaultService) {
    this.getInitialData();
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe(result => {
      this.hostDetails = result?.hostDetails[0];
      this.promotionsInfo = result?.promotions;
    })
  };

}
