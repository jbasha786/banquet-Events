import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { CardSideContentComponent } from '../shared/components/card-side-content/card-side-content.component';
import { CorporateMeetingComponent } from './corporate-meeting/corporate-meeting.component';
import { FAQComponent } from './faq/faq.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingComponent } from '../booking/booking.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { DefaultService } from '../services/default.service';
import { BannerModel } from './Models/banner.model';
import { ChatComponent } from '../chat/chat.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { UpcomingEventsListComponent } from '../shared/components/upcoming-events-list/upcoming-events-list.component';
import { EventBookingService } from '../services/event-hall-booking/event-booking.service';
import { ButtonComponent } from '../shared/genericComponents/button/button.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent,
    CardSideContentComponent,
    CorporateMeetingComponent,
    UpcomingEventsListComponent,
    FAQComponent,
    ChatComponent,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    CommonModule,
    CarouselModule,
    ButtonComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  bannerInfo!: BannerModel | undefined;
  eventsInfo: any;
  arrangementsInfo: any;
  experienceInfo: any;
  subbannerInfo: any;
  momentInfo: any;
  personalizedInfo: any;
  promotionsInfo: any;
  shortDesc: boolean = true;


  customOptionsforPersonalizedInfo: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    center: false,
    dots: false,
    autoHeight: true,
    autoWidth: false,
    items: 3,
    margin: 50,
    smartSpeed: 300,
    lazyLoad: true,
    responsive: {
      0: { items: 1, margin: 10 },
      768: { items: 2, margin: 50 },
      1024: { items: 3, margin: 50 },
    },
    lazyLoadEager: 1,
  };


  constructor(private router: Router, private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object,
    private defaultService: DefaultService,
    private eventBookingService: EventBookingService
  ) {
  }

  ngOnInit() {
    this.getInitialData();
    this.getOverviewPageStatus();
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.bannerInfo = result?.bannerSection;
      this.eventsInfo = result?.events;
      this.arrangementsInfo = result?.arrangements;
      this.experienceInfo = result?.experience;
      this.subbannerInfo = result?.subbannerInfo;
      this.momentInfo = result?.moment;
      this.personalizedInfo = result?.personalized;
    });
  }

  scrollToSection(sectionId: string) {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }


  continueBooking(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(BookingComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      panelClass: 'custom-dialog-wrapper',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true
    });
  }

  navigateUrl(urlName: string) {
    this.router.navigate([urlName]);
  }

  readMore(personalInfo: any) {
    personalInfo.showFullContent = !personalInfo.showFullContent;
  }

  goTolandingPages(id: number) {
    this.router.navigate([this.getPages(id)]);
  }

  getPages(id: number): string {
    let redirectComponent: string = '';
    switch (id) {
      case 1:
        redirectComponent = 'business';
        break;
      case 2:
        redirectComponent = '';
        break;
      case 3:
        redirectComponent = '';
        break
    }
    return redirectComponent;
  }

  getOverviewPageStatus() {
    this.eventBookingService.getOverviewPage().subscribe(data => {
      if (data) {
        this.continueBooking('300ms', '300ms');
      }
    });
  }

}
