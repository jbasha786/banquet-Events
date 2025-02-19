import { CommonModule, DatePipe } from '@angular/common';
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventBookingService } from '../../../services/event-hall-booking/event-booking.service';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../../genericComponents/button/button.component';
import { DatePickerComponent } from '../../genericComponents/date-picker/date-picker.component';
import { CustomDialogComponent } from '../custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-selected-halls',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    CommonModule,
    FormsModule,
    ButtonComponent,
    DatePickerComponent],
  templateUrl: './selected-halls.component.html',
  styleUrl: './selected-halls.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SelectedHallsComponent {
  cancelBtn: string = "Cancel";
  requestSent: boolean = true;
  requestAccepted: boolean = true;
  selectedHalls: any[] = [];
  checkinDate: Date | null = null;
  checkOutDate: Date | null = null;
  tomorrowDate = new Date();

  slots = [
    { id: 1, shift: "8AM - 11 PM" },
    { id: 2, shift: "12AM - 3 PM" },
    { id: 3, shift: "4PM - 7 PM" },
    { id: 4, shift: "8AM - 11 PM" },
  ]

  constructor(private dialog: MatDialog,
    private router: Router,
    private eventBookingService: EventBookingService,
    private datePipe: DatePipe,
    private dialogRef: MatDialogRef<SelectedHallsComponent>
  ) {
    this.getSelectedHalls();
    this.checkinDate = new Date();
    this.checkOutDate = new Date();
    this.checkOutDate.setDate(this.checkOutDate.getDate() + 1);
  }

  getSelectedHalls() {
    this.selectedHalls = this.eventBookingService.getSelectedHall();
  }

  cancelReservation() {
    this.dialog.open(CustomDialogComponent, {
      panelClass: 'custom-dialog-nested',  
      backdropClass: 'custom-backdrop-nested',
      width: "550px",
      disableClose: true,
      data: {
        title: 'Are you sure ?',
        type: 'confirm',
        bookingName: 'Queens Lagoon Suite',
        showActions: true,
        cancelText: 'No',
        confirmText: 'Yes',
        backdropCloseButton: false,
        hideCloseButton: true
      }
    });
  }

  getDetails() {
    this.dialog.closeAll();
    this.router.navigate(['overview']);
  }

  confirm() {
    this.requestSent = true;
    this.requestAccepted = false;
  }
}
