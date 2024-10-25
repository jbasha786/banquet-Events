import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-selected-dates',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule],
  providers: [provideNativeDateAdapter()],
  templateUrl: './selected-dates.component.html',
  styleUrl: './selected-dates.component.scss'
})
export class SelectedDatesComponent {
  slots = [
    {id: 1, shift: "Morning 8Am - 11 PM"},
    {id: 2, shift: "Afternoon 12Am - 3 PM"},
    {id: 3, shift: "Night 4Am - 7 PM"},
    {id: 4, shift: "Night 8Am - 11 PM"},
  ]
}
