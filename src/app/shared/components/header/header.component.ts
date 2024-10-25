import { Component, OnInit } from '@angular/core';
import { LoginComponent } from '../../../login/login.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  constructor(private router: Router) { }

  items = [
    { src: "../../../../assets/images/logo/phone-call.png", name: "0592-356 000"  , link: ""},
    { src: "../../../../assets/images/logo/question-sign.png",name: "Help"  , link: ""},
    { src: "../../../../assets/images/logo/world.png" ,name: "English" , link: ""},
    { src: "../../../../assets/images/logo/shopping-bag.png", name: "My Bookings"  , link: ""},
    { src: "../../../../assets/images/logo/user.png" , name: "Sign In Or Join" , link: "login"},
  ];
  Event_Items = [
    {name: "OverView"},
    {name: "Best Deals"},
    {name: "Social Events"},
    {name: "Family Events"},
    {name: "Corporate Events"},
  ]

  ngOnInit(): void {
  }

  redirect(name: string) {
    this.router.navigate([name]);
  }
}
