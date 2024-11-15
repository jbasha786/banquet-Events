import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventGuestsService } from '../../services/event-guest/event-guests.service';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss'
})
export class GuestComponent {

  adults: number = 1;
  child: number = 1;

  constructor(private eventACService: EventGuestsService) { }

  changeAdults(event: any) {
    this.eventACService.setSelectedAdultCount(event);
  }
  changeChild(event: any) {
    this.eventACService.setSelectedChildCount(event);
  }

}
