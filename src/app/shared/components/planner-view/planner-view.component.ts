import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'

@Component({
  selector: 'app-planner-view',
  standalone: true,
  imports: [CommonModule, MatIconModule, FullCalendarModule],
  templateUrl: './planner-view.component.html',
  styleUrl: './planner-view.component.scss'
})
export class PlannerViewComponent {

  selectViewType: string = "Day";

  ngOnInit(): void {
  }

  calendarOptionsDay: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridDay',
    allDaySlot: false,
    headerToolbar: false,
    weekends: true,
    // events: [
    //   { title: 'Meeting', start: new Date() }
    // ],
    dayHeaderFormat: {
      weekday: 'short',
      day: "2-digit"
    }
  };

  calendarOptionsWeek: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridWeek',
    headerToolbar: false,
    weekends: true,
    dayCellClassNames: 'week',
    allDaySlot: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ],
    dayHeaderFormat: {
      weekday: 'short',
      day: "2-digit"
    },
    dayHeaderContent: (args) => {
      const weekday = args.date.toLocaleDateString('en-US', { weekday: 'short' });
      const day = args.date.getDate().toString().padStart(2, '0');
      return `<span class="weekday" > ${weekday} </span>
        < span class="day-number" > ${day} </span>`;
    },
  };

  calendarOptionsMonth: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: false,
    weekends: true,
    allDaySlot: false,
    events: [
      { title: 'Meeting', start: new Date() }
    ]
  };

  calendarEvents = [
    { title: 'Event 1', date: '2024-12-31' },
    { title: 'Event 2', date: '2024-12-31' }
  ];

  selectView(view: string): void {
    this.selectViewType = view;
  }
}
