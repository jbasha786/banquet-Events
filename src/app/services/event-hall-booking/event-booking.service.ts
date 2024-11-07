import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  confirmedHallDetails!: any;

  constructor() { }

  setSelectedHall(event: any) {
    this.confirmedHallDetails = event;
  }

  getSelectedHall() {
    return this.confirmedHallDetails;
  }
}
