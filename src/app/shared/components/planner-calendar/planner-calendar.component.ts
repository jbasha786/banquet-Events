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
  currentDate: any;
  isCurrentDate!: boolean;
  daysInMonth!: number[];
  weeksInMonth!: number[][];
  customDays: string[] = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  todayEvents: any = [
    {id:1, time: "08:15 AM - 11:00 AM", name:"John Doe - Event Name", location: "ABC Plazza"},
    {id:2, time: "12:15 PM - 02:00 PM", name:"John Doe - Event Name", location: "ABC Plazza"},
    {id:3, time: "04:15 PM - 06:00 PM", name:"John Doe - Event Name", location: "ABC Plazza"},
  ];

  specialEvents: any = [
    {id: 1, name:'Bike Riding [09:00 A.M to 1.00 P.M]', src: "/assets/images/Planner/icons/bike.svg"},
    {id: 2, name:'Bike Riding [02:00 A.M to 4.00 P.M]', src: "/assets/images/Planner/icons/bike.svg"}
  ];

  upcomingEvents: any = [
    {id: 1, name:"01 - New Year's Party : 31-12-2024 ✨"},
    {id: 2, name:"02 - New Year's Party : 31-12-2024 ✨"},
    {id: 3, name:"03 - ACME Party : 31-12-2024 ✨"},
    {id: 4, name:"04 - ACME Party : 14-02-2025 ✨"},
    {id: 5, name:"05 - ACME Party : 14-03-2025 ✨"},
    {id: 6, name:"06 - ACME Party : 31-04-2024 ✨"},
  ];

  constructor() {
    const date = new Date();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();
    this.currentDay = date.getDate();
    this.currentDate = date;
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
