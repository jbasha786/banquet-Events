import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {

  meetingDetails: any = [
    {
      id: 1,
      src:"/assets/images/Business/how_it_works/one.svg",
      title: "Let Us Know Your Requirements",
      text: "Fill the form and provide accurate details."
    },
    {
      id: 2,
      src:"/assets/images/Business/how_it_works/two.svg",
      title: "Choose from Curated Packages",
      text: "We filter the available options to offer you the best available deals & prices, in your defined budget and with the highest safety standards."
    }, {
      id: 3,
      src:"/assets/images/Business/how_it_works/three.svg",
      title: "Confirm Your Package & Confirm",
      text: "You can block the services and confirm by paying the booking amount."
    }
  ]

}
