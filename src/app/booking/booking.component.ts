import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { NavigationStart, Router } from '@angular/router';
import { SelectedDatesComponent } from './selected-dates/selected-dates.component';
import { GuestComponent } from './guest/guest.component';
import { PlaningComponent } from './planing/planing.component';
import { ListOfHallsComponent } from './list-of-halls/list-of-halls.component';
import { ChooseMenuComponent } from '../shared/components/choose-menu/choose-menu.component';
import { BusinessBookingReviewComponent } from '../business-landing-page/event-booking/business-booking-review/business-booking-review.component';
import { SelectedHallsComponent } from '../shared/components/selected-halls/selected-halls.component';
import { EventBookingService } from '../services/event-hall-booking/event-booking.service';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../shared/genericComponents/button/button.component';
import { Subscription } from 'rxjs';

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
    SelectedHallsComponent,
    CommonModule,
    ButtonComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {
  private routerSubscription: Subscription;

  @Input() buttonNext: string = 'Next';
  currentStep: number = 1;
  defaultProgressSize: number = 0;
  progressbarWidth: any;
  defaultPages: number = 6;
  cancelBtnText: string = 'Cancel';
  backBtnText: string = 'Back';
  nextBtnText: string = 'Next';

  constructor(public dialogRef: MatDialogRef<BookingComponent>, private dialog: MatDialog,
    private eventBookingService: EventBookingService,
    private router: Router
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
    } else if (this.currentStep > 1) {
      this.currentStep--;
      this.eventBookingService.setSelectedStepNumber(this.currentStep);
      this.updatePage();
      this.updateNextBtnText(this.currentStep);
    }
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

  closeDialog() {
    this.dialogRef.close();
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
