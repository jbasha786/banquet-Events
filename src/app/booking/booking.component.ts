import { Component, Input } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectedDatesComponent } from './selected-dates/selected-dates.component';
import { GuestComponent } from './guest/guest.component';
import { PlaningComponent } from './planing/planing.component';
import { ListOfHallsComponent } from './list-of-halls/list-of-halls.component';
import { ChooseMenuComponent } from '../shared/components/choose-menu/choose-menu.component';
import { BusinessBookingReviewComponent } from '../business-landing-page/event-booking/business-booking-review/business-booking-review.component';
import { SelectedHallsComponent } from '../shared/components/selected-halls/selected-halls.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    MatDialogModule,
    SelectedDatesComponent,
    GuestComponent,
    PlaningComponent,
    ListOfHallsComponent,
    ChooseMenuComponent,
    BusinessBookingReviewComponent,
    SelectedHallsComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  @Input() buttonNext: string = 'Next';
  currentStep: number = 1;
  defaultProgressSize: number = 0;
  progressbarWidth: any;
  defaultPages: number = 6;

  constructor(public dialogRef: MatDialogRef<BookingComponent>) {
    this.defaultProgressSize = 100 / this.defaultPages;
    this.progressbarWidth = this.defaultProgressSize + "%";
  }

  returnToHome() {
    this.dialogRef.close();
  }

  back() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
    this.updatePage();
  }

  next() {
    if (this.currentStep < this.defaultPages) {
      this.currentStep++;
    }
    this.updatePage();
  }

  updatePage() {
    this.progressbarWidth = this.defaultProgressSize * this.currentStep + "%";
  }
  onButtonChange(Proceed: string): void {
    this.buttonNext = Proceed; // Update the button text
  }

}
