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
  currentYear: number = this.currentDate.getFullYear();
  currentIndex: number = 0;
  visibleRange: number = 15;
  visibleDates: number[] = [];
  constructor(
    private cdr: ChangeDetectorRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.generateMonthData();
    this.updatePaginatedDays();
    this.updateVisibleDates();
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.adjustVisibleRange();
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
  if (screenWidth < 576) {
    this.visibleRange = 2;
  } else if (screenWidth >= 576 && screenWidth < 768) {
    this.visibleRange = 3; 
  } else if (screenWidth >= 768 && screenWidth < 992) {
    this.visibleRange = 10; 
  } else if (screenWidth >= 992 && screenWidth < 1200) {
    this.visibleRange = 12; 
  } else {
    this.visibleRange = 15;
  }
      this.updatePaginatedDays();
      this.cdr.detectChanges();
    }
  }

  generateMonthData() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth();
    this.currentMonth = this.getMonthName(month);
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
  }

  selectDate(day: number | null) {
    if (day) {
      console.log(`Selected date: ${this.currentMonth} ${day}`);
      alert(`Selected date: ${this.currentMonth} ${day}, ${this.currentYear}`)
    }
  }

  scrollDates(step: number): void {
    const nextIndex = this.currentIndex + step;
    if (nextIndex >= 0 && nextIndex <= this.daysInMonth.length - this.visibleRange) {
      this.currentIndex = nextIndex;
      this.updateVisibleDates();
    }
  }
  updateVisibleDates(): void {
    this.visibleDates = this.daysInMonth.slice(this.currentIndex, this.currentIndex + this.visibleRange);
  }


  scrollToStart(): void {
    if (isPlatformBrowser(this.platformId)) {
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
    if (isPlatformBrowser(this.platformId)) {
      window.removeEventListener('resize', this.adjustVisibleRange.bind(this));
    }
  }

}