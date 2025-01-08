import { Component, HostListener, Inject, OnInit, PLATFORM_ID, ChangeDetectorRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import moment from 'moment';

@Component({
  selector: 'app-custom-calender',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './custom-calender.component.html',
  styleUrl: './custom-calender.component.scss'
})
export class CustomCalenderComponent {

  selectedDate: string = '';
  months: string[] = moment.months();
  currentPage: number = 0;
  paginatedDays: (number | null)[] = [];
  daysInMonth: number[] = Array.from({ length: 31 }, (_, i) => i + 1);
  currentDate: Date = new Date();
  currentMonth: string = '';
  dayName: string = '';
  dayNames: string = '';
  datesWithWeekdays: { date: string; weekday: string }[] = [];
  currentYear: number = this.currentDate.getFullYear();
  currentIndex: number = 0;
  visibleRange: number = 15;
  visibleDates: { date: string; weekday: string }[] = [];

  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.updatePaginatedDays();
    this.generateMonthData(); 
    this.generateweekname();
    this.generateDatesWithWeekdays(this.currentYear);
    this.updateVisibleDates();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId) && typeof  window !== 'undefined') {
      this.adjustVisibleRange();
      this.updatePaginatedDays();
      this.scrollDates(0);
      window.addEventListener('resize', this.adjustVisibleRange.bind(this));
    }
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.adjustVisibleRange();
    this.updatePaginatedDays();
  }
  adjustVisibleRange(): void {
    if (typeof window !== 'undefined') {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 320) {
        this.visibleRange = 2;
      } else if (screenWidth > 320 && screenWidth < 576) {
        this.visibleRange = 3;
      } else if (screenWidth >= 576 && screenWidth < 769) {
        this.visibleRange = 6;
      } else if (screenWidth >= 768 && screenWidth < 992) {
        this.visibleRange = 8;
      } else if (screenWidth >= 992 && screenWidth < 1200) {
        this.visibleRange = 10;
      } else {
        this.visibleRange = 15;
      }
      this.currentIndex = 0;
      this.cdr.markForCheck();
    }
  }

  generateMonthData() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    this.currentMonth = this.getMonthName(month);
  }
  generateweekname() {
    const date = new Date();
    const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    const dayName = dayNames[date.getDay()];
  }
  generateDatesWithWeekdays(year: number): void {
    let cmonth: number = new Date().getMonth();
    const daysInMonth = new Date(year, cmonth + 1, 0).getDate();
    this.datesWithWeekdays = [];

    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, cmonth, day);
      const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
      this.datesWithWeekdays.push({ date: date.toDateString(), weekday });
    }
  }

  getMonthName(monthIndex: number): string {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[monthIndex];
  }

  updatePaginatedDays(): void {
    this.paginatedDays = this.daysInMonth.slice(this.currentIndex, this.currentIndex + this.visibleRange);
  }
  changeMonth(offset: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset);
    this.currentYear = this.currentDate.getFullYear();
    this.generateMonthData();
    this.currentIndex = 0;
    this.visibleDates = this.datesWithWeekdays.slice(0, this.visibleRange);
  }
  selectDate(selectedDate: string) {
    alert(`Selected Date: ${selectedDate}`);
  }
  scrollDates(step: number): void {
    const nextIndex = this.currentIndex + step;
    const daysInMon = new Date(this.currentDate.getFullYear(), this.currentDate.getMonth() + 1, 0).getDate(); // Number of days in the month
    if (nextIndex >= 0 && nextIndex <= daysInMon - this.visibleRange) {
      this.currentIndex = nextIndex;
      this.updateVisibleDates();
    }
  }
  updateVisibleDates(): void {
    this.visibleDates = this.datesWithWeekdays.slice(this.currentIndex, this.currentIndex + this.visibleRange);
  }
  scrollToStart(): void {
    if (isPlatformBrowser(this.platformId) && typeof document !== 'undefined') {
      const calendarGrid = document.querySelector('.calendar-grid');
      if (calendarGrid) {
        (calendarGrid as HTMLElement).scrollLeft = 0;
      }
    }
  }
  ngAfterViewInit(): void {
    this.scrollToStart();
  }
  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId) && typeof window !== 'undefined') {
      window.removeEventListener('resize', this.adjustVisibleRange.bind(this));
    }
  }

}