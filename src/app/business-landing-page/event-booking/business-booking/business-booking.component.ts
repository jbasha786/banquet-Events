import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AboutEventComponent } from '../about-event/about-event.component';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from '../accommodation/accommodation.component';
import { ShapesComponent } from '../shapes/shapes.component';
import { TimePartComponent } from '../time-part/time-part.component';
import { BusinessBookingReviewComponent } from '../business-booking-review/business-booking-review.component';

@Component({
  selector: 'app-business-booking',
  standalone: true,
  imports: [
    MatDialogModule,
    AboutEventComponent,
    AccommodationComponent,
    ShapesComponent,
    BusinessBookingReviewComponent,
    CommonModule,
    TimePartComponent
  ],
  templateUrl: './business-booking.component.html',
  styleUrl: './business-booking.component.scss'
})
export class BusinessBookingComponent {
  currentStep: number = 1;
  defaultProgressSize: number = 0;
  progressbarWidth: any;
  defaultPages: number = 4;

  constructor(public dialogRef: MatDialogRef<BusinessBookingComponent>) {
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
}
