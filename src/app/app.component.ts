import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultService } from './services/default.service';
import { EventsComponent } from './events/events.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, DashboardComponent,EventsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VipsBanquetOffers';

  headerDetails: any;

  constructor(private defaultService: DefaultService) { }

  ngOnInit() {
    this.getHeaderDetails();
  }

  getHeaderDetails() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.headerDetails = result?.header;
    })
  }
}
