import { CommonModule } from '@angular/common';
import { Component, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FullCalendarComponent, FullCalendarModule } from '@fullcalendar/angular';
import { CalendarOptions, EventInput, formatDate } from '@fullcalendar/core';
import timeGridPlugin from '@fullcalendar/timegrid';
import dayGridPlugin from '@fullcalendar/daygrid';
import listPlugin from '@fullcalendar/list';
import moment from 'moment';
import { WindowService } from '../../services/window.service';
import { createFormatter } from '@fullcalendar/core/internal';

@Component({
  selector: 'app-planner-view',
  standalone: true,
  imports: [CommonModule, MatIconModule, FullCalendarModule],
  templateUrl: './planner-view.component.html',
  styleUrl: './planner-view.component.scss'
})
export class PlannerViewComponent {
  @ViewChild('calendar') calendarComponent!: FullCalendarComponent;
  private resizeListener: any;
  calendarDailyEvents: any = [
    {
      title: 'ABC Plaza',
      start: "2025-01-08T10:30:00",
      end: '2025-01-08T11:00:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        linkUrl: '/assets/images/Planner/icons/expand.svg',
        eventId: 1,
        contactPerson: "John Doe",
        contactPersonNumber: "+51 5471 1477",
        bufferEventAfter: 30
      },
      classNames: ['event-green']
    },
    {
      title: 'ABC Plaza',
      start: '2025-01-08T00:00:00',
      end: '2025-01-08T05:00:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        linkUrl: '/assets/images/Planner/icons/expand.svg',
        eventId: 2,
        contactPerson: "John Doe",
        contactPersonNumber: "+51 5471 1477",
        bufferEventAfter: 30
      },
      classNames: ['event-primary']
    }, {
      title: 'Bike Rides',
      start: '2025-01-08T06:00:00',
      end: '2025-01-08T11:00:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        linkUrl: '/assets/images/Planner/icons/expand.svg',
        eventId: 3,
        contactPerson: "John Doe",
        contactPersonNumber: "+51 5471 1477",
        bufferEventAfter: 30
      },
      classNames: ['event-orange']
    }, {
      title: 'Bike Rides',
      start: '2025-01-09T06:00:00',
      end: '2025-01-09T11:00:00',
      extendedProps: {
        imageUrl: '/assets/images/Planner/icons/Vector.svg',
        linkUrl: '/assets/images/Planner/icons/expand.svg',
        eventId: 3,
        contactPerson: "John Doe",
        contactPersonNumber: "+51 5471 1477",
        bufferEventAfter: 30
      },
      classNames: ['event-orange']
    },
  ];
  calendarOptions: CalendarOptions = {
    plugins: [timeGridPlugin, dayGridPlugin, listPlugin],
    initialView: 'timeGridDay',
    allDaySlot: false,
    weekends: true,
    dayHeaderContent: (arg) => {
      const dayOfWeek = formatDate(arg.date, { weekday: 'short' });
      const dayOfMonth = formatDate(arg.date, { day: '2-digit' });
      console.log(dayOfWeek, dayOfMonth)
      return {
        html: `
        <p class="m-0">${dayOfWeek}</p>
        <p class="m-0 custom_date_number">${dayOfMonth}</p>
        `
      }
    },
    events: this.calendarDailyEvents,
    views: {
      timeGridDay: {
        eventContent: this.eventContent.bind(this),
        eventDidMount: this.eveventDidMount.bind(this),
        dayHeaderDidMount: this.updateHeader.bind(this)
      },
      timeGridWeek: {
        eventContent: this.eventContent.bind(this),
        eventDidMount: this.eveventDidMount.bind(this),
        dayHeaderDidMount: this.updateHeader.bind(this)
      },
      dayGridMonth: {
        dayHeaderFormat: { weekday: 'short' },
      }
    },
    eventOverlap: true,
    droppable: true,
    datesSet: (args: any) => {
      this.updateLeftPanelBasedOnView(args.view.type);
    }

  };
  constructor(@Inject(PLATFORM_ID) private platformId: any,
    private windowService: WindowService) {
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined') {
      this.resizeListener = this.windowService.onResize().subscribe(() => {
        // this.setCalendarOptions();
      });
    }
  }
  ngOnDestroy(): void {
    if (this.resizeListener) {
      this.resizeListener.unsubscribe();
    }
  }

  updateHeader(arg: any) {
    const dayOfWeek = formatDate(arg.date, { weekday: 'short' });
    const dayOfMonth = formatDate(arg.date, { day: '2-digit' });
    console.log(dayOfWeek, dayOfMonth)
    return `
      <p class="m-0">${dayOfWeek}</p>
      <p class="m-0">${dayOfMonth}</p>
      `
  }

  eventContent(eventInfo: any) {
    const event = eventInfo.event;
    const imageUrl = event.extendedProps.imageUrl;
    const contactPerson = event.extendedProps.contactPerson;
    const contactPersonNumber = event.extendedProps.contactPersonNumber;
    const linkUrl = event.extendedProps.linkUrl;
    const startTime = moment(event.start).format('hh:mm A');
    const endTime = moment(event.end).format('hh:mm A');
    const days = moment(event.end).diff(moment(event.start), 'minutes');
    return {
      html: `
       <div class="eventStyle">
    <div class="d-flex gap-2 align-items-center mb-2 event_title">
        <img src="${imageUrl}" alt="Event Image" class="eventImage" />
        <span class="fw-medium fs-14">${event.title}</span>
    </div>
    <p class="fs-12 fw-medium event_time"><span>${startTime}</span><span class="ml-4 mr-4">-</span><span>${endTime}</span></p>

    <div class="contact_Section position-absolute">
        <div class="d-flex justify-content-between align-items-end">
            <div>
                <p class="m-0">${contactPerson}</p>
                <p class="m-0">${contactPersonNumber}</p>
            </div>
            <div>
                <img class="cursor" src="${linkUrl}" alt="link">
            </div>
        </div>
    </div>
</div>
      `
    };
  }

  eveventDidMount(info: any) {
    const eventStart = info.event.start;
    const eventEnd = info.event.end;
    const durationMinutes = (eventEnd.getTime() - eventStart.getTime()) / (1000 * 60);
    const eventElement = info.el;
    const heightPerMinute = 100 / 60;
    const eventHeight = durationMinutes * heightPerMinute;
    if (eventHeight < 100) {
      const footerDiv = eventElement.querySelector('.contact_Section');
      const timeDiv = eventElement.querySelector('.event_time');
      if (footerDiv) footerDiv.style.display = 'none';
      if (timeDiv) timeDiv.style.display = 'none';
    } else if (eventHeight === 100) {
      const footerDiv = eventElement.querySelector('.contact_Section');
      const timeDiv = eventElement.querySelector('.event_time');
      if (footerDiv) footerDiv.style.display = 'none';
      if (timeDiv) timeDiv.style.display = 'inline';
    } else {
      const footerDiv = eventElement.querySelector('.contact_Section');
      const timeDiv = eventElement.querySelector('.event_time');
      if (footerDiv) footerDiv.style.display = 'inline';
      if (timeDiv) timeDiv.style.display = 'inline';
    }
  }
  updateLeftPanelBasedOnView(view: string) {
    if (this.calendarComponent) {
      const calendarApi = this.calendarComponent.getApi();
      let leftToolbarContent = '';

      if (view === 'dayGridMonth') {
        leftToolbarContent = 'prev,dayGridMonth,next';
      } else if (view === 'timeGridWeek') {
        leftToolbarContent = 'prev,timeGridWeek,next';
      } else if (view === 'timeGridDay') {
        leftToolbarContent = 'prev,timeGridDay,next';
      }

      calendarApi.setOption('headerToolbar', {
        left: leftToolbarContent,
        right: 'timeGridDay,timeGridWeek,dayGridMonth',
      });
      calendarApi.render();
    }
  }
}
