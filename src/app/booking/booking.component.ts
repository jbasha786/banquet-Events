import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectedDatesComponent } from './selected-dates/selected-dates.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [MatDialogModule, SelectedDatesComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  planningScreen: boolean = true;
  selectDatesScreen: boolean = false;

  planning = [
    { id: 1, src: '/assets/images/planing/cake.svg', name: "Birthday" },
    { id: 2, src: '/assets/images/planing/wedding-rings.svg', name: "Wedding" },
    { id: 3, src: '/assets/images/planing/bar.svg', name: "Social Events" },
    { id: 4, src: '/assets/images/planing/talk.svg', name: "Bussiness Meetings" },
    { id: 5, src: '/assets/images/planing/bar.svg', name: "Social Events" },
    { id: 5, src: '/assets/images/planing/confetti.svg', name: "Engagement" },
    { id: 7, src: '/assets/images/planing/briefcase.svg', name: "Work Event" },
    { id: 8, src: '/assets/images/planing/parents.svg', name: "Family Event" },
    { id: 9, src: '/assets/images/planing/collaboration.svg', name: "Get Together" },
    { id: 10, src: '/assets/images/planing/conference.svg', name: "Conferences" },
    { id: 11, src: '/assets/images/planing/conversation.svg', name: "Small Meetings" },
    { id: 12, src: '/assets/images/planing/restaurant.svg', name: "Others" },
  ];

  constructor(private router: Router, public dialogRef: MatDialogRef<BookingComponent>) {

  }

  returnToHome() {
    this.dialogRef.close();
  }

  back() {
    this.planningScreen = true;
    this.selectDatesScreen = false;
  }

  next() {
    this.planningScreen = false;
    this.selectDatesScreen = true;
  }

}
