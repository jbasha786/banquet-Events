import { Component } from '@angular/core';
import { MyBookingCradComponent } from '../shared/components/my-booking-crad/my-booking-crad.component';
import { DefaultService } from '../services/default.service';
import { bookingHistoryModel } from '../shared/_models/bookingHistoryModel';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [MyBookingCradComponent, MatButtonModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss'
})
export class BookingHistoryComponent {
  bookings: bookingHistoryModel[] = [];

  constructor(private defaultService: DefaultService) { }

  ngOnInit() {
    this.getInitialData();
    console.log(this.bookings)
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.bookings = result ?.bookingHistory;
    })
  }
}
