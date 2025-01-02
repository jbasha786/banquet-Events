import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EventBookingService } from '../../../services/event-hall-booking/event-booking.service';

@Component({
  selector: 'app-selected-halls',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    CommonModule],
  templateUrl: './selected-halls.component.html',
  styleUrl: './selected-halls.component.scss'
})
export class SelectedHallsComponent {

  requestSent: boolean = true;
  requestAccepted: boolean = true;
  selectedHalls: any[] = [];

  constructor(private dialog: MatDialog,
    private router: Router,
    private eventBookingService: EventBookingService
  ) {
    this.getSelectedHalls();
  }

  getSelectedHalls() {
   this.selectedHalls = this.eventBookingService.getSelectedHall();
  }

  cancelReservation() {
    this.dialog.open(DialogueComponent, {
      width: "500px",
      disableClose: true,
      position: { top: '0', left: '0' },
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
