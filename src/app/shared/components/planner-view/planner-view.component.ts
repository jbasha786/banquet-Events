import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid'
import dayGridPlugin from '@fullcalendar/daygrid'
import moment from 'moment';

@Component({
  selector: 'app-planner-view',
  standalone: true,
  imports: [CommonModule, MatIconModule, FullCalendarModule],
  templateUrl: './planner-view.component.html',
  styleUrl: './planner-view.component.scss'
})
export class PlannerViewComponent {
  calendarDailyEvents = [
    {
      title: 'Event 1',
      start: "2025-01-07T10:30:00",
      end: '2025-01-07T11:30:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        eventId: 1
      },
      classNames: ['event-green']
    },
    {
      title: 'Meeting with John Deo',
      start: '2025-01-07T00:00:00',
      end: '2025-01-07T05:00:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        eventId: 2
      },
      classNames: ['event-primary']
    }, {
      title: 'Meeting with John',
      start: '2025-01-07T06:00:00',
      end: '2025-01-07T11:00:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        eventId: 3
      },
      classNames: ['event-orange']
    },
  ];

  ngOnInit(): void {
  }

  calendarOptionsDay: CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin],
    initialView: 'timeGridDay',
    allDaySlot: false,
    weekends: true,
    headerToolbar: {
      left: `prev,next`,
      right: 'timeGridDay,timeGridWeek,dayGridMonth'
    },
    dayHeaderFormat: {
      weekday: 'short',
      day: "2-digit"
    },
    views: {
      dayGridMonth: {
        dayHeaderFormat: { weekday: 'short' },
      }
    },

    eventContent: this.eventContent.bind(this), // customize event content
    // eventClick: this.handleEventClick.bind(this) // handle event click

  };

  eventContent(eventInfo: any) {
    const event = eventInfo.event;
    const imageUrl = event.extendedProps.imageUrl;
    const eventId = event.extendedProps.eventId;
    const startTime = moment(event.start).format('hh:mm A');
    const endTime = moment(event.end).format('hh:mm A');
    return {
      html: `
        <div class="eventStyle">
          <div class="d-flex gap-2 justify-content-center align-items-center mb-2">
            <img src="${imageUrl}" alt="Event Image" class="eventImage" />
            <span class="fw-medium fs-14">${event.title}</span>
          </div>
          <p class="fs-12 fw-medium"><span>${startTime}</span><span class="ml-4 mr-4">-</span><span>${endTime}</span></p>
          <button onclick="navigateToEvent(${eventId})" style="margin-left: 10px;">Go to Event</button>
        </div>
      `
    };
  }

  eventRender(info: any) {
    const event = info.event;
    const el = info.el; 
    if (moment(event.end).diff(moment(event.start), 'minutes') > 60) { 
      el.style.backgroundColor = '#FFDD57'; 
    } else {
      el.style.backgroundColor = '#4CAF50'; 
    }
  }
}
