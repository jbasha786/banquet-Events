import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-planner-header',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './planner-header.component.html',
  styleUrl: './planner-header.component.scss'
})
export class PlannerHeaderComponent {
  notificationCount: number = 5; // Example notification count
    @Input() headerInfo: any;
  

  viewNotifications(): void {
    console.log('Notifications clicked!');
  }
}
