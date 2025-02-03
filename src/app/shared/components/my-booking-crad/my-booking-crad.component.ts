import { CommonModule } from '@angular/common';
import { Component, input, Input } from '@angular/core';
import { bookingHistoryModel } from '../../_models/bookingHistoryModel';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { ButtonComponent } from '../../genericComponents/button/button.component';

@Component({
  selector: 'app-my-booking-crad',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './my-booking-crad.component.html',
  styleUrl: './my-booking-crad.component.scss'
})
export class MyBookingCradComponent {
  isHovered = false;
  cancelBtn: string = "Cancel Booking";
  editBtn: string = "Edit Booking";
  viewBtn: string = "View Details";
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
  @Input() hoverImage: any;
  @Input() conformationID: any;
  @Input() cancelbooking: any;
  @Input() editbooking: any;
  @Input() viewdetails: any;
  constructor(private dialog: MatDialog){}
  ngOnInIt() {
  }
  cancelBooking(){
     this.dialog.open(DialogueComponent, {
          width: "500px",
          disableClose: true,
          panelClass: 'custom-dialog-panel'
        });
  }
  editBooking(){
    console.log("Edit Booking clicked");
  }
  viewDetail(){
    console.log("view detail clicked");
  }
}
