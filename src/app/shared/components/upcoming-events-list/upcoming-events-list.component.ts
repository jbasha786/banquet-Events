import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-upcoming-events-list',
  standalone: true,
  imports: [],
  templateUrl: './upcoming-events-list.component.html',
  styleUrl: './upcoming-events-list.component.scss'
})
export class UpcomingEventsListComponent {

  @Input() promotionsInfo: any;

}
