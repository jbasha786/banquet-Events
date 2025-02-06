import { Component } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AboutEventComponent } from '../about-event/about-event.component';
import { CommonModule } from '@angular/common';
import { AccommodationComponent } from '../accommodation/accommodation.component';
import { ShapesComponent } from '../shapes/shapes.component';
import { BusinessBookingReviewComponent } from '../business-booking-review/business-booking-review.component';
import { ListOfHallsComponent } from '../../../booking/list-of-halls/list-of-halls.component';
import { SelectedHallsComponent } from '../../../shared/components/selected-halls/selected-halls.component';
import { EventBookingService } from '../../../services/event-hall-booking/event-booking.service';
import { ButtonComponent } from '../../../shared/genericComponents/button/button.component';
import { NavigationStart, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
    ButtonComponent,
    CommonModule
  ],
  templateUrl: './business-booking.component.html',
  styleUrl: './business-booking.component.scss'
})
export class BusinessBookingComponent {
  private routerSubscription: Subscription;
  currentStep: number = 1;
  defaultProgressSize: number = 0;
  progressbarWidth: any;
  defaultPages: number = 6;
  cancelBtnText: string = 'Cancel';
  backBtnText: string = 'Back';
  nextBtnText: string = 'Next';

  constructor(public dialogRef: MatDialogRef<BusinessBookingComponent>,
    private dialog: MatDialog,
    private router: Router,
    private eventBookingService: EventBookingService
  ) {
    this.defaultProgressSize = 100 / this.defaultPages;
    this.progressbarWidth = this.defaultProgressSize + "%";
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.dialogRef.close();
      }
    });
  }

  ngOnInit(): void {
    this.getSelectedTabIndex();
  }

  returnToHome() {
    this.dialogRef.close();
    this.dialog.closeAll();
    this.eventBookingService.clearSelectedServices();
  }

  back() {
    if (this.currentStep === 1) {
      this.returnToHome();
    }
    if (this.currentStep > 1) {
      this.currentStep--;
      this.eventBookingService.setSelectedStepNumber(this.currentStep);
      this.updateNextBtnText(this.currentStep);
    }
    this.updatePage();
  }

  next() {
    if (this.currentStep < this.defaultPages) {
      this.currentStep++;
      this.eventBookingService.setSelectedStepNumber(this.currentStep);
      this.updateNextBtnText(this.currentStep);
    }
    this.updatePage();
  }

  updatePage() {
    this.progressbarWidth = this.defaultProgressSize * this.currentStep + "%";
  }

  onButtonChange(Proceed: string): void {
    this.nextBtnText = Proceed;
  }

  confirmBooking() {
    if (this.currentStep === 6) {
      this.currentStep = 1;
    }
    this.dialogRef.close();
    this.dialog.closeAll();
    this.eventBookingService.clearSelectedServices();
    this.eventBookingService.setSelectedStepNumber(1);
  }

  getSelectedTabIndex() {
    this.currentStep = this.eventBookingService.getSelectedStepNumber();
  }

  updateNextBtnText(currentStepNumber: number) {
    this.nextBtnText = currentStepNumber === 5 ? 'Confirm Reservation' : 'Next';
  }
  ngOnDestroy(): void {
    this.routerSubscription.unsubscribe();
  }
}
