import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-my-booking-crad',
  standalone: true,
  imports: [],
  templateUrl: './my-booking-crad.component.html',
  styleUrl: './my-booking-crad.component.scss'
})
export class MyBookingCradComponent {
  @Input() title: string | undefined;

}
