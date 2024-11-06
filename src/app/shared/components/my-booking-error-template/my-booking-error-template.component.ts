import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-booking-error-template',
  standalone: true,
  imports: [],
  templateUrl: './my-booking-error-template.component.html',
  styleUrl: './my-booking-error-template.component.scss'
})
export class MyBookingErrorTemplateComponent {
  constructor(private router: Router) { }

  signIn() {
    this.router.navigate(['signUp']);
  }
}
