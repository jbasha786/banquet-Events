import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { bookingHistoryModel } from '../../_models/bookingHistoryModel';

@Component({
  selector: 'app-my-booking-crad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-booking-crad.component.html',
  styleUrl: './my-booking-crad.component.scss'
})
export class MyBookingCradComponent {
  @Input() title: string | undefined;
  @Input() price: any;
  @Input() picture: any;
  @Input() ratingPicture: any;
  @Input() diamensions: any;
  @Input() bookingID: any;
  @Input() dob: any;
  @Input() frameImg: any;
  @Input() noOfGuestsName: any;
  @Input() noOfGuestValue: any;
  @Input() checkInname: any;
  @Input() checkInvalue: any;
  @Input() checkOutname: any;
  @Input() checkOutvalue: any;
  @Input() statusName: any;
  @Input() addrImg: any;
  @Input() favImg: any;
  @Input() shareImg: any;
  @Input() statusvalue: any;
  @Input() address: any;
  @Input() rating: any;
  @Input() viewImage: any;
  @Input() conformationID: any;
  @Input() cancelbooking: any;
  @Input() editbooking: any;
  @Input() viewdetails: any;
  ngOnInIt() {
  }
}
