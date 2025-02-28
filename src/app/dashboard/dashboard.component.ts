import { Component, inject, Inject, PLATFORM_ID, ViewEncapsulation } from '@angular/core';
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
import { CustomDialogService } from '../services/custom-dialog.service';

// Store
import { Store } from '@ngrx/store';
import * as bannerActions from "../_store/actions/banner.action";
import * as subBannerActions from "../_store/actions/subBanner.action";
import * as personalizedActions from "../_store/actions/peronalized.action";
import * as arrangementsActions from "../_store/actions/arrangements.action";
import * as liveEventsAction from "../_store/actions/liveEvents.action";
import * as experienceAction from "../_store/actions/experience.action";
import * as momentActions from "../_store/actions/moment.action";
import { bannerSelector } from '../_store/selectors/banner.selector';
import { subBannerSelector } from '../_store/selectors/subBanner.selector';
import { BannerModel } from '../_models/banner.model';
import { personalizedSelector } from '../_store/selectors/personalized.selector';
import { PersonalizedModel } from '../_models/personalized.model';
import { arrangementSelector } from '../_store/selectors/arrangements.selector';
import { liveEventsSelector } from '../_store/selectors/liveEvents.selector';
import { liveEventsModel } from '../_models/liveEvents.model';
import { experienceSelector } from '../_store/selectors/experience.selector';
import { ExperienceModel } from '../_models/experience.model';
import { momentSeletor } from '../_store/selectors/moment.selector';
import { MomemtModel } from '../_models/moment.model';

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
  styleUrl: './dashboard.component.scss',
  encapsulation: ViewEncapsulation.None
})

export class DashboardComponent {
  activeIndex: number | null = null;
  bannerInfo!: BannerModel | undefined;
  eventsInfo: any;
  arrangementsInfo: any;
  experienceInfo: any;
  subbannerInfo: any;
  momentInfo: any;
  personalizedInfo!: PersonalizedModel[] | undefined;
  promotionsInfo: any;
  shortDesc: boolean = true;
  private dialogService = inject(CustomDialogService);

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
    this.store.select(bannerSelector).subscribe((data: any) => {
      this.bannerInfo = data;
    })
  }

  public fetchsubBannerStoreData() {
    this.store.select(subBannerSelector).subscribe(data => {
      this.subbannerInfo = data;
    })
  }

  public fetchPersonalizedInfoStoreData() {
    this.store.select(personalizedSelector).subscribe((data: PersonalizedModel[]) => {
      this.personalizedInfo = data;
    })
  }

  public fetchArrangementStoreData() {
    this.store.select(arrangementSelector).subscribe((data: PersonalizedModel[]) => {
      this.arrangementsInfo = data;
    })
  }

  public fetchliveEventsStoreData() {
    this.store.select(liveEventsSelector).subscribe((data: liveEventsModel) => {
      this.eventsInfo = data;
    })
  }

  public fetchExperienceStoreData() {
    this.store.select(experienceSelector).subscribe((data: ExperienceModel[]) => {
      this.experienceInfo = data;
    })
  }

  private fetchMomentStoreData() {
    this.store.select(momentSeletor).subscribe((data: MomemtModel[])=> {
      this.momentInfo = data;
    })
  }

  ngOnInit() {
    this.getInitialData();
    this.getOverviewPageStatus();
    this.fetchBannerStoreData();
    this.fetchsubBannerStoreData();
    this.fetchPersonalizedInfoStoreData();
    this.fetchArrangementStoreData();
    this.fetchliveEventsStoreData();
    this.fetchExperienceStoreData();
    this.fetchMomentStoreData();

  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.store.dispatch(bannerActions.setBanner({ banner: result?.bannerSection }));
      this.store.dispatch(subBannerActions.setSubBanner({ subBanner: result?.subbannerInfo }));
      this.store.dispatch(liveEventsAction.setliveEvents({ liveEvents: result?.events }));
      this.store.dispatch(personalizedActions.setPersonalizedInfo({ personalized: result?.personalized }));
      this.store.dispatch(arrangementsActions.setArrangements({ arrangements: result?.arrangements }));
      this.store.dispatch(experienceAction.setExperience({ experience: result?.experience }));
      this.store.dispatch(momentActions.setMomentInfo({momentInfo: result?.moment}));
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
    this.dialogService.openDialog(BookingComponent, {
      width: '100vw',
      height: '100vh',
      maxWidth: '100vw',
      panelClass: 'booking-dialog-wrapper',
      enterAnimationDuration,
      exitAnimationDuration,
      disableClose: true,
      // autoFocus: false
    }).afterClosed().subscribe(result => {
      console.log("Business Booking Dialog Closed", result);
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
