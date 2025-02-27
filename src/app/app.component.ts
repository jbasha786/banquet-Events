import { Component, Inject } from '@angular/core';
import { NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DefaultService } from './services/default.service';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { supportsScrollBehavior } from '@angular/cdk/platform';
import { LoadingService } from './services/loading.service';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, LoadingSpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {


  headerDetails: any;

  constructor(private defaultService: DefaultService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object,
    private meta: Meta,
    private title: Title,
    private loadingService: LoadingService) {
    this.setMetaTags();
  }

  setMetaTags() {
    this.title.setTitle('Book Luxury Banquet Halls | Event Planning Made Easy');

    this.meta.addTags([
      { name: 'description', content: 'Discover top-rated banquet halls for corporate events, weddings, and conferences. Book effortlessly with our easy-to-use planner.' },
      { name: 'keywords', content: 'banquet halls, event planning, corporate events, wedding venues' },
      { name: 'author', content: 'Your Company Name' },
      { name: 'robots', content: 'index, follow' },
      { property: 'og:title', content: 'Book Luxury Banquet Halls | Event Planning Made Easy' },
      { property: 'og:description', content: 'Find and book the best banquet halls for events, weddings, and meetings.' },
      { property: 'og:image', content: 'https://yourwebsite.com/assets/images/banquet-hall.jpg' },
      { property: 'og:url', content: 'https://yourwebsite.com/' }
    ]);
  }
  ngOnInit() {
    this.getHeaderDetails();
    this.setupScrollRestoration();
    this.loadingSpinner();
  }

  getHeaderDetails() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.headerDetails = result?.header;
    })
  }
  setupScrollRestoration() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.pipe(
        filter(event => event instanceof NavigationEnd)
      ).subscribe(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
      window.onload = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }
  addSchemaMarkup() {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EventVenue",
      "name": "Luxury Banquet Hall",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Main St",
        "addressLocality": "New York",
        "addressRegion": "NY",
        "postalCode": "10001",
        "addressCountry": "US"
      }
    });
    document.head.appendChild(script);
  }

  loadingSpinner() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loadingService.show();
      }
      if (event instanceof NavigationEnd || event instanceof NavigationError) {
        this.loadingService.hide();
      }
    });
  }
}
