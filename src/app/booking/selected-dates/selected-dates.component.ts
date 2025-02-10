import { Component, ViewEncapsulation } from '@angular/core';
import { DateRange, DefaultMatCalendarRangeStrategy, MAT_DATE_RANGE_SELECTION_STRATEGY, MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, provideNativeDateAdapter } from '@angular/material/core';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { EventDateSlotsService } from '../../services/event-date-slot/event-date-slots.service';

@Component({
  selector: 'app-selected-dates',
  standalone: true,
  imports: [MatNativeDateModule, MatDatepickerModule, MatListModule, CommonModule],
  providers: [provideNativeDateAdapter(), {
    provide: MAT_DATE_RANGE_SELECTION_STRATEGY,
    useClass: DefaultMatCalendarRangeStrategy
  }],
  templateUrl: './selected-dates.component.html',
  styleUrl: './selected-dates.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class SelectedDatesComponent {

  selectedDateRange!: DateRange<Date>;
  selected!: Date | null;
  specificDaysView: boolean = true;
  flexibleDatesView: boolean = false;

  constructor(private eventDSService: EventDateSlotsService) { }

  _onSelectedChange(date: Date | null): void {
    if (!date) {
      console.error('No date selected');
      return;
    }
  
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
  
    this.eventDSService.setSelectedDate(this.selectedDateRange);
  }
  
  slots = [
    { id: 1, shift: "Morning 8Am - 11 PM" },
    { id: 2, shift: "Afternoon 12Am - 3 PM" },
    { id: 3, shift: "Night 4Am - 7 PM" },
    { id: 4, shift: "Night 8Am - 11 PM" },
  ]

  dateFilter = (date: Date | null): boolean => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset to midnight
    return (date || today) >= today;
  };

  slotsChange(event: MatSelectionListChange) {
    this.eventDSService.setAvailableSlots(event.options[0].value);
  }
}
