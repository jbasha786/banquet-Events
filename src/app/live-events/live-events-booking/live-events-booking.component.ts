import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../../shared/genericComponents/button/button.component';

@Component({
  selector: 'app-live-events-booking',
  standalone: true,
  imports: [MatIconModule, CommonModule, ButtonComponent],
  templateUrl: './live-events-booking.component.html',
  styleUrl: './live-events-booking.component.scss'
})
export class LiveEventsBookingComponent {

  itemQty: number = 1;
  numberOfTickets: number = 250;
  isbtnActive: boolean = false;

  increment() {
    this.itemQty = this.itemQty + 1;
    this.isbtnActive = false;
  }

  decrement() {
    this.itemQty = this.itemQty == 1 ? 1 : this.itemQty - 1;
    this.isbtnActive = true;
  }

}
