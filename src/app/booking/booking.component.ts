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
import { EventBookingService } from '../services/event-hall-booking/event-booking.service';

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

  constructor(public dialogRef: MatDialogRef<BookingComponent>, private router: Router,
    private eventBookingService: EventBookingService
  ) {
    this.defaultProgressSize = 100 / this.defaultPages;
    this.progressbarWidth = this.defaultProgressSize + "%";
  }

  ngOnInit(): void {
    this.getSelectedTabIndex();
  }

  returnToHome() {
    this.dialogRef.close();
  }

  back() {
    if (this.currentStep === 1) {
      this.returnToHome();
    } else if (this.currentStep > 1) {
      this.currentStep--;
      this.eventBookingService.setSelectedStepNumber(this.currentStep);
      this.updatePage();
    }
  }

  next() {
    if (this.currentStep < this.defaultPages) {
      this.currentStep++;
      this.eventBookingService.setSelectedStepNumber(this.currentStep);
    }
    this.updatePage();
  }

  updatePage() {
    this.progressbarWidth = this.defaultProgressSize * this.currentStep + "%";
  }
  onButtonChange(Proceed: string): void {
    this.buttonNext = Proceed;
  }

  getSelectedTabIndex() {
    this.currentStep = this.eventBookingService.getSelectedStepNumber();
  }

}
