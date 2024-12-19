import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EventGuestsService } from '../../services/event-guest/event-guests.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, CommonModule],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss'
})
export class GuestComponent {

  guestFields = [
    {
      label: 'Adults',
      value: 40,
      changeFunction: this.changeAdults.bind(this)
    },
    {
      label: 'Elder Child',
      value: 12,
      changeFunction: this.changeElderChild.bind(this)
    },
    {
      label: 'Younger Child',
      value: 4,
      changeFunction: this.changeYoungerChild.bind(this)
    },
    {
      label: 'Babies',
      value: 1,
      changeFunction: this.changeBabies.bind(this)
    }
  ];

  constructor(private eventACService: EventGuestsService) { }

  changeAdults(value: number) {
    this.eventACService.setSelectedAdultCount(value);
  }

  changeElderChild(value: number) {
    this.eventACService.setSelectedElderChildCount(value);
  }
  changeYoungerChild(value: number) {
    this.eventACService.setSelectedYoungerChildCount(value);
  }

  changeBabies(value: number) {
    this.eventACService.setSelectedBabiesCount(value);
  }

}
