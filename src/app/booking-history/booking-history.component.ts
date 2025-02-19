import { Component, ViewEncapsulation } from '@angular/core';
import { MyBookingCradComponent } from '../shared/components/my-booking-crad/my-booking-crad.component';
import { DefaultService } from '../services/default.service';
import { bookingHistoryModel } from '../shared/_models/bookingHistoryModel';
import { InvoiceHistoryComponent } from '../invoice-history/invoice-history.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BookingHistoryViewComponent } from '../booking-history-view/booking-history-view.component';
import { MatIcon, MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [MatTabsModule,InvoiceHistoryComponent,BookingHistoryViewComponent,MatIconModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BookingHistoryComponent {
  
  constructor() { }
  ngOnInit() {}
}
