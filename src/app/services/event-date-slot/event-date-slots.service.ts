import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventDateSlotsService {

  selectedDate!: any;
  availableslots!: any;

  constructor() { }

  setSelectedDate(date: any) {
    this.selectedDate = date;
  }

  setAvailableSlots(slot: any) {
    this.availableslots = slot;
  }

  getSelectedDate() {
    return this.selectedDate;
  }

  getAvailableSlots() {
    return this.availableslots;
  }

}
