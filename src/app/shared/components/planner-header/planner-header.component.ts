import { Component } from '@angular/core';

@Component({
  selector: 'app-planner-header',
  standalone: true,
  imports: [],
  templateUrl: './planner-header.component.html',
  styleUrl: './planner-header.component.scss'
})
export class PlannerHeaderComponent {
  notificationCount: number = 5; // Example notification count

  viewNotifications(): void {
    console.log('Notifications clicked!');
  }
}
