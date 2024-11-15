import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { AmenitiesComponent } from '../amenities/amenities.component';
import { ThingsToKnowComponent } from '../things-to-know/things-to-know.component';
import { GoogleMapComponent } from '../google-map/google-map.component';
import { DefaultService } from '../../../services/default.service';
import { HostDetailsComponent } from '../../../booking/overview/host-details/host-details.component';
import { UpcomingEventsListComponent } from '../upcoming-events-list/upcoming-events-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-events-item',
  standalone: true,
  imports: [
    AmenitiesComponent,
    ThingsToKnowComponent,
    GoogleMapComponent,
    HostDetailsComponent,
    UpcomingEventsListComponent,
    MatCardModule,
    MatIconModule],
  templateUrl: './events-item.component.html',
  styleUrl: './events-item.component.scss'
})
export class EventsItemComponent {

  hostDetails: any;
  promotionsInfo: any;
  itemQty: number = 1;
  @ViewChild('stickyMenuForTickets') menuElement!: ElementRef;
  @ViewChild('removeStickyMenuForTickets') upcomingEventsElement!: ElementRef;

  sticky: boolean = false;
  stickyPosition: any;
  removeSticky: any;

  constructor(private defaultService: DefaultService) {
    this.getInitialData();
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe(result => {
      this.hostDetails = result?.hostDetails[0];
      this.promotionsInfo = result?.promotions;
    })
  };

  ngAfterViewInit() {
    this.stickyPosition = this.menuElement.nativeElement.offsetTop;
    this.removeSticky = this.upcomingEventsElement.nativeElement.offsetTop;
  }

  @HostListener('window:scroll', ['$event'])

  handleScroll() {
    const windowScroll = window.pageYOffset;
    if (windowScroll >= this.stickyPosition) {
      this.sticky = true;
      if (windowScroll >= this.removeSticky) {
        this.sticky = false;
      }
    } else {
      this.sticky = false;
    }
  }

  increment() {
    this.itemQty = this.itemQty + 1;
  }

  decrement() {
    this.itemQty = this.itemQty == 1 ? 1 : this.itemQty - 1;
  }

}
