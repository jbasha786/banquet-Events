import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DefaultService } from '../../services/default.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule, DatePipe } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ThingsToKnowComponent } from '../../shared/components/things-to-know/things-to-know.component';
import { GoogleMapComponent } from '../../shared/components/google-map/google-map.component';
import { AmenitiesComponent } from '../../shared/components/amenities/amenities.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatInputModule } from '@angular/material/input';
import { HostDetailsComponent } from './host-details/host-details.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventBookingService } from '../../services/event-hall-booking/event-booking.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ThingsToKnowComponent,
    GoogleMapComponent,
    AmenitiesComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    MatInputModule,
    HostDetailsComponent,
    FormsModule,
    CommonModule],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  ItemDetails: any
  hostDetails: any;
  ratingSection: any;
  ratingValues: number[] = [5, 4, 3, 2, 1];
  checkinDate: string | null;
  checkOutDate: string | null;
  tomorrowDate = new Date();
  routerName: any;
  slots = [
    { id: 1, shift: "8AM - 11 PM" },
    { id: 2, shift: "12AM - 3 PM" },
    { id: 3, shift: "4PM - 7 PM" },
    { id: 4, shift: "8AM - 11 PM" },
  ]
  constructor(private defaultService: DefaultService,
    private datePipe: DatePipe,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private eventBookingService: EventBookingService
  ) {
    this.checkinDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
    this.checkOutDate = this.datePipe.transform(this.tomorrowDate.setDate(new Date().getDate() + 1), 'yyyy-MM-dd');
  }

  ngOnInit(): void {
    this.getInitialData();
    this.routerName = this.activatedRoute.snapshot.queryParamMap.get('name');
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe(result => {
      this.ItemDetails = result?.overview;
      this.hostDetails = result?.hostDetails[0];
      this.ratingSection = result?.ratingSection;
    })
  };

  goToBack() {
    this.eventBookingService.setOverviewPage(true);
    this.route.navigate([this.routerName]);
  }


}
