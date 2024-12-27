import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink , Router} from '@angular/router';

@Component({
  selector: 'app-planner-header',
  standalone: true,
  imports: [MatIconModule, RouterLink],
  templateUrl: './planner-header.component.html',
  styleUrl: './planner-header.component.scss'
})
export class PlannerHeaderComponent {
  notificationCount: number = 5; 
  userName: string = "Priyanka Kalidindi";
    @Input() headerInfo: any;
    dropdownOpen: boolean = false;
 
    constructor(private router: Router){}

  viewNotifications(): void {
    console.log('Notifications clicked!');
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  goToHome() {
    this.router.navigate(['']);
  }
}
