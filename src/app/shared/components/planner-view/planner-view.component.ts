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
  timeSlots: string[] = [];

  ngOnInit(): void {
    this.generateTimeSlots();
  }

  calendarOptionsDay: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridDay',
    allDaySlot: false,
    headerToolbar: false,
    weekends: true,
    // events: [
    //   { title: 'Meeting', start: new Date() }
    // ]
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
    ]
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

  generateTimeSlots() {
    let startHour = 0;
    let endHour = 23;
    for (let i = startHour; i <= endHour; i++) {
      let hour = i % 12 || 12;
      let ampm = i < 12 ? 'am' : 'pm';
      this.timeSlots.push(`${hour} ${ampm}`);
    }
  }
}
