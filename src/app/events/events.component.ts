import { Component } from '@angular/core';
import { eventModel } from '../_models/events.model';
import { DefaultService } from '../services/default.service';
import { EventsCardComponent } from '../shared/components/events-card/events-card.component';
import { CustomCalenderComponent } from '../shared/components/custom-calender/custom-calender.component';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [EventsCardComponent, CustomCalenderComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {
  events: eventModel[] = [];

  constructor(private defaultService: DefaultService) { }
  ngOnInit() {
    this.getInitialData();
    console.log(this.events)
  }

  getInitialData() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.events = result ?.events_arr;
    })
  }
}
