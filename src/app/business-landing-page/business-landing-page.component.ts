import { Component, inject, ViewEncapsulation } from '@angular/core';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PlayPlannedComponent } from './play-planned/play-planned.component';
import { WorldClassComponent } from './world-class/world-class.component';
import { OneControlComponent } from './one-control/one-control.component';
import { CorporateComponent } from './corporate/corporate.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { BusinessBookingComponent } from './event-booking/business-booking/business-booking.component';
import { EventBookingService } from '../services/event-hall-booking/event-booking.service';
import { ButtonComponent } from '../shared/genericComponents/button/button.component';
import { CommonModule } from '@angular/common';
import { CustomDialogService } from '../services/custom-dialog.service';

@Component({
  selector: 'app-business-landing-page',
  standalone: true,
  imports: [HowItWorksComponent,
    PlayPlannedComponent,
    WorldClassComponent,
    OneControlComponent,
    CorporateComponent,
    MatDialogModule,
    ButtonComponent,
    CommonModule],
  templateUrl: './business-landing-page.component.html',
  styleUrl: './business-landing-page.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BusinessLandingPageComponent {
  private dialogService = inject(CustomDialogService);
  constructor(private dialog: MatDialog,
    private eventBookingService: EventBookingService
  ) { }

  ngOnInit(): void {
    this.getOverviewPageStatus();
  }

  bookEvents(enterAnimationDuration: string, exitAnimationDuration: string) {
    this.dialogService.openDialog(BusinessBookingComponent, {
      data: { hallName: 'Queens Lagoon Suite', date: new Date() },
      width: "90vw",
      height: "90vh",
      panelClass: 'business-booking'
    }).afterClosed().subscribe(result => {
      console.log("Business Booking Dialog Closed", result);
    });
  }

  getOverviewPageStatus() {
    this.eventBookingService.getOverviewPage().subscribe(data => {
      if (data) {
        const selectedStepNumber = this.eventBookingService.getSelectedStepNumber();
        if (selectedStepNumber !== 1) {
          this.bookEvents('300ms', '300ms');
        }
      }
    });
  }

}