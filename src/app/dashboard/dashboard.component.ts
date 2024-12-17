import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { CardSideContentComponent } from '../shared/components/card-side-content/card-side-content.component';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
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
import { UpcomingEventsListComponent } from '../shared/components/upcoming-events-list/upcoming-events-list.component';
import { ChatComponent } from '../chat/chat.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent,
    CardSideContentComponent,
    CarouselComponent,
    CorporateMeetingComponent,
    UpcomingEventsListComponent,
    FAQComponent,
    ChatComponent,
    RouterLink,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule,
    CommonModule,
    CarouselModule],
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
    private defaultService: DefaultService
  ) {
  }

  ngOnInit() {
    this.scrollToTop();
    this.getInitialData();
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
      this.promotionsInfo = result?.promotions;
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

  scrollToTop() {
    if (isPlatformBrowser(this.platformId)) {
      const element = document.getElementById('webPage');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  continueBooking(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialog.open(BookingComponent, {
      width: "80vw",
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true
    });
  }

  goToSignUp() {
    this.router.navigate(['signUp']);
  }

  readMore(personalInfo: any) {
    personalInfo.showFullContent = !personalInfo.showFullContent;
  }

}
