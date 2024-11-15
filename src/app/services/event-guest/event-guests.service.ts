import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventGuestsService {

  selectedAdultCount: number = 1;
  selectedChildCount: number = 1;

  constructor() { }

  setSelectedAdultCount(count: any) {
    this.selectedAdultCount = count;
  }
  setSelectedChildCount(count: any) {
    this.selectedChildCount = count;
  }
  getSelectedAdultCount() {
    return this.selectedAdultCount;
  }
  getSelectedChildCount() {
    return this.selectedChildCount;
  }
}
