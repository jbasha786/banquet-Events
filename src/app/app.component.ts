import { Component, Inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DefaultService } from './services/default.service';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { supportsScrollBehavior } from '@angular/cdk/platform';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VipsBanquetOffers';

  headerDetails: any;

  constructor(private defaultService: DefaultService, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) { }

  ngOnInit() {
    this.getHeaderDetails();
    this.setupScrollRestoration();
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
        window.scrollTo({top:0, behavior:'smooth'});
      });
      window.onload = () => {
        window.scrollTo({top:0, behavior:'smooth'});
      };
    }
  }
  
}
