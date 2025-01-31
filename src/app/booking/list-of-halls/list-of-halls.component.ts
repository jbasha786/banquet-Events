import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DefaultService } from '../../services/default.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule, DatePipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../../shared/components/dialogue/dialogue.component';
import { Router } from '@angular/router';
import { EventBookingService } from '../../services/event-hall-booking/event-booking.service';
import { EventPlanService } from '../../services/event-plan/event-plan.service';
import { EventGuestsService } from '../../services/event-guest/event-guests.service';
import { EventDateSlotsService } from '../../services/event-date-slot/event-date-slots.service';
import { ArticlesComponent } from '../../shared/components/articles/articles.component';
import { ZindexService } from '../../../app/services/zindex.service';
import { ChooseMenuComponent } from '../../shared/components/choose-menu/choose-menu.component';
import { FormsModule } from '@angular/forms';
import { hallModel } from '../../_models/halls.model';
import { ButtonComponent } from '../../shared/genericComponents/button/button.component';

@Component({
  selector: 'app-list-of-halls',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    CommonModule,
    FormsModule, ButtonComponent],
  templateUrl: './list-of-halls.component.html',
  styleUrl: './list-of-halls.component.scss'
})
export class ListOfHallsComponent {
  hallInfo!: hallModel | undefined;
  @Output() buttonChangeEvent = new EventEmitter<string>();
  @Input() view: string = '';
  buttonNext: string = 'Next';
  hallsList: any;
  reserveBtn: boolean = true;
  requestSent: boolean = true;
  requestAccepted: boolean = true;
  selectedItem: number = 0;
  checkinDate: Date | null = null;
  checkOutDate: Date | null = null;
  tomorrowDate = new Date();

  slots = [
    { id: 1, shift: "8AM - 11 PM" },
    { id: 2, shift: "12AM - 3 PM" },
    { id: 3, shift: "4PM - 7 PM" },
    { id: 4, shift: "8AM - 11 PM" },
  ]

  constructor(private defaultService: DefaultService,
    private dialog: MatDialog,
    private router: Router,
    private eventBookingService: EventBookingService,
    private eventPlaning: EventPlanService,
    private eventACService: EventGuestsService,
    private eventDSService: EventDateSlotsService,
    private zIndexService: ZindexService,
    private datePipe: DatePipe
  ) {
    this.checkinDate = new Date();
    this.checkOutDate = new Date();
    this.checkOutDate.setDate(this.checkOutDate.getDate() + 1);
  }

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
      width: "500px",
      disableClose: true,
      position: { top: '0', left: '0' },
    });
  }
  reserve(reserve: any) {
    reserve.isActive = true
    this.selectedItem = reserve.id;
    this.eventBookingService.setSelectedHall(reserve);
    this.reserveBtn = false;
    this.requestSent = false;
    this.buttonChangeEvent.emit('Proceed');
  }

  getDetails() {
    this.dialog.closeAll();
    this.router.navigate(['overview'], { queryParams: { name: this.view } });
  }

  getGuestDetails() {
    const adults = this.eventACService.getSelectedAdultCount();
    const elderChild = this.eventACService.getSelectedElderChildCount();
    const youngerChild = this.eventACService.getSelectedYoungerChildCount();
    const babies = this.eventACService.getSelectedBabiesCount();
  }

  getDateAndSlots() {
    const selectedDate = this.eventDSService.getSelectedDate();
    const slots = this.eventDSService.getAvailableSlots();
  }

  confirm() {
    this.requestSent = true;
    this.requestAccepted = false;
  }

  addArticles() {
    this.zIndexService.setHeaderZIndex(1000);
    const dialogRef = this.dialog.open(ArticlesComponent, {
      panelClass: 'fixed-dialog',
      position: { top: '75px' },
      autoFocus: false,
    });

    dialogRef.afterClosed().subscribe(() => {
      this.zIndexService.setHeaderZIndex(1030);
    });
  }

  chooseMenu() {
    this.dialog.open(ChooseMenuComponent, {
      width: '100%',
      height: '100vh',
      maxWidth: '100%',
      panelClass: 'choosemenu-dialog',
      position: { left: '10%' },
    });
  }
  toggleSelection(item: any) {
    item.isActive = !item.isActive;

    if (item.isActive) {
      this.selectedItem = item.id;
    } else {
      this.selectedItem = 0;
    }
  }
  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.hallInfo = result?.hallSection;
    });
  }

}
