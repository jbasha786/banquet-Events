import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AboutEventComponent } from '../about-event/about-event.component';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from '../accommodation/accommodation.component';
import { ShapesComponent } from '../shapes/shapes.component';
import { BusinessBookingReviewComponent } from '../business-booking-review/business-booking-review.component';
import { ListOfHallsComponent } from '../../../booking/list-of-halls/list-of-halls.component';
import { SelectedHallsComponent } from '../../../shared/components/selected-halls/selected-halls.component';
import { EventBookingService } from '../../../services/event-hall-booking/event-booking.service';

@Component({
  selector: 'app-business-booking',
  standalone: true,
  imports: [
    MatDialogModule,
    AboutEventComponent,
    AccommodationComponent,
    ShapesComponent,
    BusinessBookingReviewComponent,
    ListOfHallsComponent,
    SelectedHallsComponent,
    CommonModule
  ],
  templateUrl: './business-booking.component.html',
  styleUrl: './business-booking.component.scss'
})
export class BusinessBookingComponent {
  currentStep: number = 1;
  defaultProgressSize: number = 0;
  progressbarWidth: any;
  defaultPages: number = 6;

  constructor(public dialogRef: MatDialogRef<BusinessBookingComponent>,
    private eventBookingService: EventBookingService
  ) {
    this.defaultProgressSize = 100 / this.defaultPages;
    this.progressbarWidth = this.defaultProgressSize + "%";
  }

  returnToHome() {
    this.dialogRef.close();
  }

  back() {
    if (this.currentStep === 1) {
      this.returnToHome();
    }
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

  confirmBooking() {
    this.dialogRef.close();
    this.eventBookingService.clearSelectedServices();
  }
}
