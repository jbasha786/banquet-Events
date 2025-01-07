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
  calendarDailyEvents = [
    {
      title: 'Event 1',
      start: "2025-01-06T10:30:00",
      end: '2025-01-06T11:30:00',
      description:'text',
      imageUrl:"",
      classNames:['event-green']
    },
    {
      title: 'Meeting with John Deo',
      start: '2025-01-06T00:00:00',
      end: '2025-01-06T05:00:00',
      imageUrl:"",
      description: 'Discuss project details',
      classNames:['event-primary']
    }, {
      title: 'Meeting with John',
      start: '2025-01-06T06:00:00',
      end: '2025-01-06T11:00:00',
      description: 'Discuss project details',
      classNames:['event-orange']
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
    // eventContent: function(arg) {
    //   const { event } = arg;
    //   const imageUrl = event.extendedProps[0].imageUrl || '';
    //   const description = event.extendedProps[0].description || '';
      
    //   return {
    //     html: `
    //       <div class="event-content">
    //         <img src="${imageUrl}" alt="Event Image" class="event-image"/>
    //         <div class="event-details">
    //           <span class="event-title">${event.title}</span>
    //           <span class="event-description">${description}</span>
    //         </div>
    //       </div>
    //     `
    //   };
    // },
  };
}
