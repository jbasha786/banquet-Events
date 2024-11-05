import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DefaultService } from '../../services/default.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../../shared/components/dialogue/dialogue.component';
import { Router } from '@angular/router';
import { EventBookingService } from '../../services/event-hall-booking/event-booking.service';
import { EventPlanService } from '../../services/event-plan/event-plan.service';
import { EventGuestsService } from '../../services/event-guest/event-guests.service';
import { EventDateSlotsService } from '../../services/event-date-slot/event-date-slots.service';

@Component({
  selector: 'app-list-of-halls',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    CommonModule],
  templateUrl: './list-of-halls.component.html',
  styleUrl: './list-of-halls.component.scss'
})
export class ListOfHallsComponent {

  hallsList: any;
  reserveBtn: boolean = true;

  constructor(private defaultService: DefaultService,
    private dialog: MatDialog,
    private router: Router,
    private eventBookingService: EventBookingService,
    private eventPlaning: EventPlanService,
    private eventACService: EventGuestsService,
    private eventDSService: EventDateSlotsService
  ) { }

  ngOnInit() {
    this.getHalsList();
    this.getGuestDetails();
    this.getDateAndSlots();
  }

  getHalsList() {
    this.defaultService.getJSON().subscribe(result => {
      this.hallsList = result.hallsList;
    })
  }

  cancelReservation() {
    this.dialog.open(DialogueComponent, {
      width:"500px",
      disableClose: true
    });
   }
  reserve(reserve: any) {
    this.eventBookingService.setSelectedHall(reserve);
    this.reserveBtn = false;
  }

  getDetails(){
    this.dialog.closeAll();
    this.router.navigate(['overview']);
  }

  getGuestDetails(){
    const adults = this.eventACService.getSelectedAdultCount();
    const child = this.eventACService.getSelectedChildCount();
    console.log(adults, child, "adults, child");
  }

  getDateAndSlots(){
    const selectedDate = this.eventDSService.getSelectedDate();
    const slots = this.eventDSService.getAvailableSlots();
    console.log(selectedDate, slots, "selectedDate, slots");
  }

}
