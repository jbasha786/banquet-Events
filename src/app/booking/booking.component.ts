import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectedDatesComponent } from './selected-dates/selected-dates.component';
import { GuestComponent } from './guest/guest.component';
import { PlaningComponent } from './planing/planing.component';
import { ListOfHallsComponent } from './list-of-halls/list-of-halls.component';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [
    MatDialogModule,
    SelectedDatesComponent,
    GuestComponent,
    PlaningComponent,
  ListOfHallsComponent],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.scss'
})
export class BookingComponent {

  currentStep: number = 1;
  defaultProgressSize: number = 0;
  progressbarWidth: any;
  defaultPages: number = 4;

  constructor(private router: Router, public dialogRef: MatDialogRef<BookingComponent>) {
    this.defaultProgressSize = 100 / this.defaultPages;
    this.progressbarWidth = this.defaultProgressSize + "%";
  }

  returnToHome() {
    this.dialogRef.close();
  }

  back() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
    this.updatePage();
  }

  next() {
    if (this.currentStep < this.defaultPages) {
      this.currentStep++;
    }
    this.updatePage();
  }

  updatePage() {
    this.progressbarWidth = this.defaultProgressSize * this.currentStep + "%";
  }

}
