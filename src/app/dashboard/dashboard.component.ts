import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CardComponent } from '../shared/components/card/card.component';
import { CardSideContentComponent } from '../shared/components/card-side-content/card-side-content.component';
import { CarouselComponent } from '../shared/components/carousel/carousel.component';
import { CorporateMeetingComponent } from './corporate-meeting/corporate-meeting.component';
import { FamilyEventsComponent } from './family-events/family-events.component';
import { FAQComponent } from './faq/faq.component';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatNativeDateModule } from '@angular/material/core';
import { BookingComponent } from '../booking/booking.component';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CardComponent,
    CardSideContentComponent,
    CarouselComponent,
    CorporateMeetingComponent,
    FamilyEventsComponent,
    FAQComponent,
    RouterLink,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})

export class DashboardComponent {
  arrangements = [
    { src: "/assets/images/cards/image.svg", name: "All-inclusive Hotelarrangementen", desc: "Whether you visit our hotel for a wonderfully relaxing weekend, as a follow-up to your business meeting or during one of our events At De Bonte Wever you will immediately feel at home! What makes", button: 'Read More -->' },
    { src: "/assets/images/cards/sunday.svg", name: "Sunday Special", desc: "Enjoy your Sunday in peace and quiet with this beautiful arrangement! Upon arrival you can immediately use the hotel room and enjoy a delicious brunch buffet. Enjoy to the fullest", button: 'Read More -->' },
    { src: "/assets/images/cards/midweek.svg", name: "Midweek All-inclusive – Drents Museum", desc: "The Drents Museum presents the major archeology exhibition Dacia – Empire of Gold and Silver. More than fifty gold and silver treasures from Romania from the 20th century BC to the 3rd century AD come to Assen.", button: 'Read More -->' },
  ];

  experience = [
    { src: "/assets/images/experience/1.svg" },
    { src: "/assets/images/experience/2.svg" },
    { src: "/assets/images/experience/3.svg" },
    { src: "/assets/images/experience/4.svg" },
    { src: "/assets/images/experience/5.svg" },
    { src: "/assets/images/experience/6.svg" },
    { src: "/assets/images/experience/7.svg" },
    { src: "/assets/images/experience/8.svg" },
  ];

  events = [
    { src: "/assets/images/cards/events.svg", title: "Darts Events", desc: "The Sheerin Family Band #concert #soldout #cavan. What a night CAVAN thank you Hotel Kilmore for a fantastic concert. Join us for an unforgettable musical evening with the sensational Geetha Madhuri and her band at Urban", btn: 'Book Now' }
  ]
  moment = [
    { src: "/assets/images/moment/1.svg", name: "", desc: "No request is too small, and no aspect is overlooked. Because we know that when every detail counts, memories are made to last a lifetime.", button: 'Kevin Thomas' },
    { src: "/assets/images/moment/2.svg", name: "", desc: "Impress your guests with a corporate event in our versatile spaces. Our modern venues, advanced technology, and impeccable service", button: 'Mark Jeffrey' },
    { src: "/assets/images/moment/3.svg", name: "", desc: "Celebrate birthdays, anniversaries, or family reunions in style with our luxurious venues and warm, personalized service. Enjoy family-friendly", button: 'Johannes Tim' }
  ];

  carousel = [
    { src: "/assets/images/cards/1.svg", name: "All-inclusive Hotelarrangementen", desc: "Whether you visit our hotel for a wonderfully relaxing weekend, as a follow-up to your business meeting or during one of our events At De Bonte Wever you will immediately feel at home! What makes", button: 'Read More -->' },
    { src: "/assets/images/cards/2.svg", name: "Sunday Special", desc: "Enjoy your Sunday in peace and quiet with this beautiful arrangement! Upon arrival you can immediately use the hotel room and enjoy a delicious brunch buffet. Enjoy to the fullest", button: 'Read More -->' },
    { src: "/assets/images/cards/3.svg", name: "Midweek All-inclusive – Drents Museum", desc: "The Drents Museum presents the major archeology exhibition Dacia – Empire of Gold and Silver. More than fifty gold and silver treasures from Romania from the 20th century BC to the 3rd century AD come to Assen.", button: 'Read More -->' },
  ];

  promotions = [
    { id: 1, src: "/assets/images/promotions/1.svg", href: '#' },
    { id: 2, src: "/assets/images/promotions/2.svg", href: '#' },
    { id: 3, src: "/assets/images/promotions/3.svg", href: '#' },
    { id: 4, src: "/assets/images/promotions/4.svg", href: '#' },
    { id: 5, src: "/assets/images/promotions/5.svg", href: '#' }
  ]

  constructor(private router: Router, private dialog: MatDialog,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
  }

  ngOnInit() {
    this.scrollToTop();
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
      const element = document.getElementById('landing_page');
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
    });
  }
}
