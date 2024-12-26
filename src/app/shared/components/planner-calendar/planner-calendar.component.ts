import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import moment from 'moment';

@Component({
  selector: 'app-planner-calendar',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './planner-calendar.component.html',
  styleUrl: './planner-calendar.component.scss'
})
export class PlannerCalendarComponent {
  selected!: Date | null;

  month!: string;
  year!: number;

  currentMonth!: number;
  currentYear!: number;
  currentDay!: number;
  isCurrentDate!: boolean;
  daysInMonth!: number[];
  weeksInMonth!: number[][];
  customDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  constructor() {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.currentDay = date.getDate();
    this.daysInMonth = [];
    this.weeksInMonth = [];
  }

  ngOnInit(): void {
    this.generateCalendar();
  }


  generateCalendar(): void {
    this.isCurrentDay();
    this.year = this.currentYear;
    this.month = moment(this.currentMonth + 1, 'MM').format('MMMM');
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const numberOfDaysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    this.daysInMonth = [];
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      this.daysInMonth.push(i);
    }
    this.weeksInMonth = [];
    let currentWeek: number[] = new Array(firstDayOfMonth).fill(0);
    for (let i = 1; i <= numberOfDaysInMonth; i++) {
      currentWeek.push(i);
      if (currentWeek.length === 7) {
        this.weeksInMonth.push(currentWeek);
        currentWeek = [];
      }
    }
    if (currentWeek.length > 0) {
      this.weeksInMonth.push(currentWeek);
    }
  }

  goToNextMonth(): void {
    if (this.currentMonth === 11) {
      this.currentMonth = 0;
      this.currentYear++;
    } else {
      this.currentMonth++;
    }
    this.generateCalendar();
  }

  goToPreviousMonth(): void {
    if (this.currentMonth === 0) {
      this.currentMonth = 11;
      this.currentYear--;
    } else {
      this.currentMonth--;
    }
    this.generateCalendar();
  }

  isCurrentDay() {
    this.isCurrentDate =  (this.currentMonth === new Date().getMonth() && this.currentYear === new Date().getFullYear());
  }
}
