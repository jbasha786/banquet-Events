import { Component } from '@angular/core';

@Component({
  selector: 'app-things-to-know',
  standalone: true,
  imports: [],
  templateUrl: './things-to-know.component.html',
  styleUrl: './things-to-know.component.scss'
})
export class ThingsToKnowComponent {

  PropertyRules = {name: "Check-in: 3:00 pm – 2:00 am Checkout before 11:00 am 60 guests maximum"};
  safety = {name: "Carbon monoxide alarm not reported Smoke alarm not reported Heights without rails or protection"};
  cancelledPolicy = {name: "Cancel before 11 AM, 28th March 2025 for a partial refund. After that, the reservation is non-refundable."}

}
