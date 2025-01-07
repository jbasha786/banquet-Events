import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  confirmedHallDetails: any[] = [];

  constructor() { }

  setSelectedHall(event: any) {
    this.confirmedHallDetails.push(event);
  }

  getSelectedHall(): any {
    return this.confirmedHallDetails;
  }

  clearSelectedServices(){
    this.confirmedHallDetails = [];
  }
}
