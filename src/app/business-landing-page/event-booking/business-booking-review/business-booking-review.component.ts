import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business-booking-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './business-booking-review.component.html',
  styleUrl: './business-booking-review.component.scss'
})
export class BusinessBookingReviewComponent {
  name: string = "John Deo";
  articleInfo: any = [{ id: 1, name: "Catering", value: "Lunch, Dinner" }];
  eventInfo: any = [
    { id: 1, name: "Event Name", value: "All Hands Town Hall Meeting" },
    { id: 2, name: "Organizer Contact Person", value: "All Hands Town Hall Meeting" },
    { id: 3, name: "Internal Employee Name", value: "All Hands Town Hall Meeting" },
    { id: 4, name: "No.Of Guests", value: "50" },
    { id: 5, name: "Check-In and Check-Out", value: "10-11-2025" },
    { id: 6, name: "Event Duration", value: "8:30 A.M to 5.00 P.M" },
    { id: 7, name: "Package Type", value: "Premium Package" },
    { id: 8, name: "Shape of Arrangements", value: "U-Shaped Hall" },
    { id: 9, name: "Articles", value: "Projector,cofee,tea,snack" },
  ];
}
