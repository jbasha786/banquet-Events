import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-planing',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss'
})
export class PlaningComponent {

  planning = [
    { id: 1, src: '/assets/images/planing/cake.svg', name: "Birthday" },
    { id: 2, src: '/assets/images/planing/wedding-rings.svg', name: "Wedding" },
    { id: 3, src: '/assets/images/planing/bar.svg', name: "Social Events" },
    { id: 4, src: '/assets/images/planing/talk.svg', name: "Bussiness Meetings" },
    { id: 5, src: '/assets/images/planing/bar.svg', name: "Social Events" },
    { id: 5, src: '/assets/images/planing/confetti.svg', name: "Engagement" },
    { id: 7, src: '/assets/images/planing/briefcase.svg', name: "Work Event" },
    { id: 8, src: '/assets/images/planing/parents.svg', name: "Family Event" },
    { id: 9, src: '/assets/images/planing/collaboration.svg', name: "Get Together" },
    { id: 10, src: '/assets/images/planing/conference.svg', name: "Conferences" },
    { id: 11, src: '/assets/images/planing/conversation.svg', name: "Small Meetings" },
    { id: 12, src: '/assets/images/planing/restaurant.svg', name: "Others" },
  ];

}
