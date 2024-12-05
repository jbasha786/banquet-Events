import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-events-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './events-card.component.html',
  styleUrl: './events-card.component.scss'
})
export class EventsCardComponent {
  @Input() picture: any;
  @Input() title: any;
  @Input() subtitle: any;
  @Input() calenderImage: any;
  @Input() period: any;
  @Input() locationImage: any;
  @Input() place: any;
  @Input() rate: any;
  @Input() bookNow: any;
}
