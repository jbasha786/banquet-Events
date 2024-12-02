import { Component, HostListener, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import moment from 'moment';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
// import { WindowRefService } from './window-ref.service';


@Component({
  selector: 'app-custom-calender',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './custom-calender.component.html',
  styleUrl: './custom-calender.component.scss'
})
export class CustomCalenderComponent {

  selectedDate: string = '';
  months: string[] = moment.months(); // Get an array of month names
  itemsPerPage: number = this.getItemsPerPage(window.innerWidth); // Number of days to show per page
  currentPage: number = 0; // Current page index
  paginatedDays: (number | null)[] = []; // Days to display on the current page

  daysInMonth: number[] = []; // Array to hold days of the current month
  currentDate: Date = new Date(); // Initialize with today's date
  currentMonth: string = ''; // Current month name
  currentYear: number = this.currentDate.getFullYear(); // Current year
  constructor(
    // private windowRef: WindowRefService,
    private breakpointObserver: BreakpointObserver,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.generateMonthData(); // Initialize the month data
    this.updatePaginatedDays(); // Initialize the paginated data
    const defaultWidth = 1024;

    this.itemsPerPage = isPlatformBrowser(this.platformId)
      ? this.getItemsPerPage(window.innerWidth)
      : this.getItemsPerPage(defaultWidth);
  }


  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Safe to use `window`
      this.itemsPerPage = this.getItemsPerPage(window.innerWidth);
    }
    this.breakpointObserver.observe([
      Breakpoints.XSmall, // Phones
      Breakpoints.Small,  // Tablets
      Breakpoints.Medium, // Small desktops
      Breakpoints.Large   // Large desktops
    ]).subscribe(result => {
      if (result.breakpoints[Breakpoints.XSmall]) {
        this.itemsPerPage = 5;
      } else if (result.breakpoints[Breakpoints.Small]) {
        this.itemsPerPage = 7;
      } else {
        this.itemsPerPage = 15;
      }
    });
  }
  // Listen to window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.itemsPerPage = this.getItemsPerPage(event.target.innerWidth);
  }

  // Adjust itemsPerPage based on screen width
  getItemsPerPage(width: number): number {
    if (width > 1200) {
      return 15; // Large screens
    } else if (width > 800) {
      return 15; // Medium screens
    } else {
      return 5; // Small screens
    }
  }
  generateMonthData() {
    const year = this.currentDate.getFullYear();
    const month = this.currentDate.getMonth(); // 0-indexed: Jan=0, Feb=1, etc.

    // Calculate days in the current month
    const totalDays = new Date(year, month + 1, 0).getDate(); // Last day of the current month

    // Populate daysInMonth array
    this.daysInMonth = Array.from({ length: totalDays }, (_, i) => i + 1);

    // Set current month name
    this.currentMonth = this.getMonthName(month);
  }
  // Utility function to get month name
  getMonthName(monthIndex: number): string {
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return monthNames[monthIndex];
  }

  // Update the days to display on the current page
  updatePaginatedDays() {
    const start = this.currentPage * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedDays = this.daysInMonth.slice(start, end);
  }

  // Move to the next set of days
  nextPage() {
    if (!this.isLastPage()) {
      this.currentPage++;
      this.updatePaginatedDays();
    }
  }
  prevpage() {
    if (!this.isLastPage()) {
      this.currentPage++;
      this.updatePaginatedDays();
    }
  }
  nextpage() {
    if (!this.isLastPage()) {
      this.currentPage++;
      this.updatePaginatedDays();
    }
  }
  changeMonth(offset: number) {
    this.currentDate.setMonth(this.currentDate.getMonth() + offset); // Adjust the month
    this.currentYear = this.currentDate.getFullYear(); // Update year if needed
    this.generateMonthData(); // Recalculate days and update month name
  }

  // Function to update the days of the month
  updateDaysInMonth() {
    const firstDayOfMonth = moment(`${this.currentYear}-${moment().month(this.months.indexOf(this.currentMonth)).format('MM')}-01`);
    const daysInMonth = firstDayOfMonth.daysInMonth();

    this.daysInMonth = [];
    // Adding empty days before the start of the month
    const startDay = firstDayOfMonth.day();
    for (let i = 0; i < startDay; i++) {
      this.daysInMonth.push(0);
    }
  }

  // Move to the previous set of days
  prevPage() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.updatePaginatedDays();
    }
  }

  // Check if the current page is the last page
  isLastPage(): boolean {
    return this.currentPage >= Math.ceil(this.daysInMonth.length / this.itemsPerPage) - 1;
  }

  // Select a date (optional functionality)
  selectDate(day: number | null) {
    if (day) {
      console.log(`Selected date: ${this.currentMonth} ${day}`);
    }
  }
}



