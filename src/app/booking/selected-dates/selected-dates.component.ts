import { Component } from '@angular/core';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-dates',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, MatListModule, CommonModule],
  providers: [provideNativeDateAdapter(), {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultMatCalendarRangeStrategy
  }],
  templateUrl: './selected-dates.component.html',
  styleUrl: './selected-dates.component.scss'
})
export class SelectedDatesComponent {

  selectedDateRange!: DateRange<Date>;
  selected!: Date | null;
  specificDaysView: boolean = true;
  flexibleDatesView: boolean = false;

  _onSelectedChange(date: Date): void {
    if (
      this.selectedDateRange &&
      this.selectedDateRange.start &&
      date > this.selectedDateRange.start &&
      !this.selectedDateRange.end
    ) {
      this.selectedDateRange = new DateRange(
        this.selectedDateRange.start,
        date
      );
    } else {
      this.selectedDateRange = new DateRange(date, null);
    }
  };

  slots = [
    { id: 1, shift: "Morning 8Am - 11 PM" },
    { id: 2, shift: "Afternoon 12Am - 3 PM" },
    { id: 3, shift: "Night 4Am - 7 PM" },
    { id: 4, shift: "Night 8Am - 11 PM" },
  ]

  listChange(event : any) {
  }

  specificDates() {
    this.specificDaysView = true;
    this.flexibleDatesView = false;
  }

  flexibleDates() {
    this.specificDaysView = false;
    this.flexibleDatesView = true;
  }
}
