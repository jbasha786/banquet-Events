import { Component, OnInit } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import moment from 'moment';

@Component({
  selector: 'app-custom-calender',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './custom-calender.component.html',
  styleUrl: './custom-calender.component.scss'
})
export class CustomCalenderComponent {
  currentMonth: string;
  currentYear: number;
  months: string[] = moment.months(); // Get an array of month names
  weeks: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysInMonth: number[] = [];
  selectedDate: string = '';

  constructor() {
    const today = moment();
    this.currentMonth = today.format('MMMM');
    this.currentYear = today.year();
  }

  ngOnInit() {
    this.updateDaysInMonth();
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

    // Add actual days in the month
    for (let day = 1; day <= daysInMonth; day++) {
      this.daysInMonth.push(day);
    }
  }

  // Function to change the month
  changeMonth(offset: number) {
    const currentMonthIndex = this.months.indexOf(this.currentMonth);
    const newMonthIndex = (currentMonthIndex + offset + 12) % 12;
    this.currentMonth = this.months[newMonthIndex];
    this.updateDaysInMonth();
  }

  // Function to select a date
  selectDate(day: number) {
    this.selectedDate = `${this.currentMonth} ${day}, ${this.currentYear}`;
  }
}



