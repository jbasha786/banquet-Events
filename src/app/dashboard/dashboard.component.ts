import { Component, inject, Inject, PLATFORM_ID } from '@angular/core';
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
import { ChatComponent } from '../chat/chat.component';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { UpcomingEventsListComponent } from '../shared/components/upcoming-events-list/upcoming-events-list.component';
import { EventBookingService } from '../services/event-hall-booking/event-booking.service';
import { ButtonComponent } from '../shared/genericComponents/button/button.component';

// Store
import { Store } from '@ngrx/store';
import * as bannerActions from "../_store/actions/banner.action";
import * as subBannerActions from "../_store/actions/subBanner.action";
import { bannerSelector } from '../_store/selectors/banner.selector';
import { subBannerSelector } from '../_store/selectors/subBanner.selector';
import { BannerModel } from '../_models/banner.model';

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
  activeIndex: number | null = null;
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
    private eventBookingService: EventBookingService,
    private store: Store<any>) {
  }

  public fetchBannerStoreData() {
    this.store.select(bannerSelector).subscribe((data:any) => {
      this.bannerInfo = data.banner;
    })
  }

  public fetchsubBannerStoreData() {
    this.store.select(subBannerSelector).subscribe(data => {
      this.subbannerInfo = data;
    })
  }

  ngOnInit() {
    this.getInitialData();
    this.getOverviewPageStatus();
    this.fetchBannerStoreData();
    this.fetchsubBannerStoreData();

  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.store.dispatch(bannerActions.setBanner({ banner: result?.bannerSection }));
      this.store.dispatch(subBannerActions.setSubBanner({ subBanner: result?.subbannerInfo }));
      this.eventsInfo = result?.events;
      this.arrangementsInfo = result?.arrangements;
      this.experienceInfo = result?.experience;
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
      disableClose: true,
      autoFocus: false
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
        const selectedStepNumber = this.eventBookingService.getSelectedStepNumber();
        if (selectedStepNumber !== 1) {
          this.continueBooking('300ms', '300ms');
        }
      }
    });
  }

  showOverlay(index: number) {
    this.activeIndex = index;
  }

  hideOverlay(index: number) {
    if (this.activeIndex === index) {
      this.activeIndex = null;
    }
  }

}
