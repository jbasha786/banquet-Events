import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-planner-calendar',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './planner-calendar.component.html',
  styleUrl: './planner-calendar.component.scss'
})
export class PlannerCalendarComponent {
  selected!: Date | null;

  month: string;
  year: number;

  constructor() {
    const date = new Date();
    this.month = date.toLocaleString('default', { month: 'long' });
    this.year = date.getFullYear();
  }
}
