import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink, Router } from '@angular/router';
import { DefaultService } from '../../../services/default.service';
import { notificationModel } from '../../_models/notificationModel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planner-header',
  standalone: true,
  imports: [MatIconModule, RouterLink, CommonModule],
  templateUrl: './planner-header.component.html',
  styleUrl: './planner-header.component.scss'
})
export class PlannerHeaderComponent {
  // notifications: notificationModel[] = [];

  notificationCount: number = 5;
  userName: string = "Priyanka Kalidindi";
  designation: string = "Receptionist"
  @Input() headerInfo: any;
  dropdownOpen: boolean = false;
  isDivOpen: boolean = false;
  src: string = "";
  notifiTitle: string = "";
  time: string = "";
  duartion: string = "";
  statusButton: string = "";

  plannerHeaderNotification = [
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "ABC Plaza",
      time: " 5 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-indigo.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "10 min ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "7 Nov 2024  08:00 AM - 11:30 AM",
      duration: "15 min ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "7 Nov 2024  08:00 AM - 11:30 AM",
      duration: "2 hours ago",
      statusButton: "New"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "6 hours ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    },
    {
      src: "/assets/images/planner/header/notifications/Avatar-orange.svg",
      notifiTitle: "Magenta",
      time: "6 Nov 2024  08:00 AM - 11:30 AM",
      duration: "5 min ago",
      statusButton: "Pending"
    }

  ]

  constructor(private router: Router, private defaultService: DefaultService) { }
  ngOnInit() {
  // this.getInitialData();
  }

  openNotifications(): void {
    this.isDivOpen = true;
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  goToHome() {
    this.router.navigate(['']);
  }

  // getInitialData() {
  //   this.defaultService.getJSON().subscribe((result: any) => {
  //     this.notifications = result?.plannerHeaderNotification;
  //   })
  // }
  close() {
    this.isDivOpen = false;
  }
}
