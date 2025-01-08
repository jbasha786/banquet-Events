import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { DefaultService } from '../../../services/default.service';
import { notificationModel } from '../../_models/notificationModel';
import { CommonModule } from '@angular/common';
import { RightPannelComponent } from '../right-pannel/right-pannel.component';

@Component({
  selector: 'app-planner-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, CommonModule, RightPannelComponent],
  templateUrl: './planner-header.component.html',
  styleUrl: './planner-header.component.scss'
})
export class PlannerHeaderComponent {
  isSearchBarVisible: boolean = true;
  notificationCount: number = 5;
  userName: string = "Priyanka Kalidindi";
  designation: string = "Receptionist"
  @Input() headerInfo: any;
  dropdownOpen: boolean = false;
  isDivOpen: boolean = false;
  src: any;
  notifiTitle: string = "";
  time: string = "";
  duartion: string = "";
  statusButton: string = "";

  plannerHeaderNotification = [
    {
      src: "/assets/images/Planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "ABC Plaza",
      time: " 5 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-indigo.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "10 min ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-pink.svg",
      notifiTitle: "Magenta",
      time: "7 Nov 2024  08:00 AM - 11:30 AM",
      duration: "15 min ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-purple.svg",
      notifiTitle: "Magenta",
      time: "7 Nov 2024  08:00 AM - 11:30 AM",
      duration: "2 hours ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-cienta.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "6 hours ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-blue.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-cienta.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-green.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-ash.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/Planner/header/notifications/Avatar-ash.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    }

  ]

  constructor(private router: Router, private defaultService: DefaultService) { }
  ngOnInit() {
  }

  openNotifications(): void {
    this.isDivOpen = true;
    this.isSearchBarVisible = false;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  goToHome() {
    this.router.navigate(['']);
  }

  close() {
    this.isDivOpen = false;
    this.isSearchBarVisible = true;
  }
}
