import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
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
  @ViewChild('calendar') calendar!: FullCalendarComponent;

  selectViewType: string = "Day";

  calendarDailyEvents = [
    {
      title: 'Event 1',
      start: "2025-01-06T10:30:00",
      end: '2025-01-06T11:30:00',
      condition: 'high'
    },
    {
      title: 'Meeting with John Deo',
      start: '2025-01-06T00:00:00',
      end: '2025-01-06T23:00:00',
      description: 'Discuss project details',
      condition: "low"
    }, {
      title: 'Meeting with John',
      start: '2025-01-06T00:00:00',
      end: '2025-01-06T23:00:00',
      description: 'Discuss project details'
    },
  ];

  calendarWeekEvents = [
    {
      title: 'Event 1',
      start: "2025-01-06T10:30:00",
      end: '2025-01-06T11:30:00',
      condition: 'high'
    },
    {
      title: 'Meeting with John Deo',
      start: '2025-01-06T00:00:00',
      end: '2025-01-06T23:00:00',
      description: 'Discuss project details',
      condition: "low"
    }, {
      title: 'Meeting with John',
      start: '2025-01-07T00:00:00',
      end: '2025-01-07T23:00:00',
      description: 'Discuss project details'
    },
  ];

  ngOnInit(): void {
    console.log(new Date())
  }

  calendarOptionsDay: CalendarOptions = {
    plugins: [timeGridPlugin],
    initialView: 'timeGridDay',
    allDaySlot: false,
    headerToolbar: false,
    weekends: true,
    eventDidMount: (info: any) => {
      const event = info.event;
      const el = info.el;
      if (event.extendedProps.condition === 'high') {
        el.style.backgroundColor = '#4AAF91'
        el.style.width = "200px"
        el.style.border = 'none'
      } else if (event.extendedProps.condition === 'low') {
        el.style.backgroundColor = '#A85191',
          el.style.width = "200px"
        el.style.border = 'none'
      } else {
        el.style.color = 'black',
          el.style.width = "200px",
          el.style.border = "1px",
          el.style.borderColor = "#FFDE24"
      }
    },
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
    dayHeaderFormat: {
      weekday: 'short',
      day: "2-digit"
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

  selectView(view: string): void {
    this.selectViewType = view;
  }



}
