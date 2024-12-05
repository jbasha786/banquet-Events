import { Component } from '@angular/core';
import { MyBookingCradComponent } from '../shared/components/my-booking-crad/my-booking-crad.component';
import { InvoiceHistoryComponent } from '../invoice-history/invoice-history.component';
import { bookingHistoryModel } from '../shared/_models/bookingHistoryModel';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-booking-history-view',
  standalone: true,
  imports: [MyBookingCradComponent, InvoiceHistoryComponent],
  templateUrl: './booking-history-view.component.html',
  styleUrl: './booking-history-view.component.scss'
})
export class BookingHistoryViewComponent {
  bookings: bookingHistoryModel[] = [];

  constructor(private defaultService: DefaultService) { }
  ngOnInit() {
    this.getInitialData();
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.bookings = result ?.bookingHistory;
    })
  }
}
