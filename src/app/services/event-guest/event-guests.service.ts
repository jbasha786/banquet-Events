import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventGuestsService {

  selectedAdultCount: number = 1;
  selectedElderChildCount: number = 1;
  selectedYoungerChildCount: number = 1;
  selectedBabiesCount: number = 1;

  constructor() { }

  setSelectedAdultCount(count: any) {
    this.selectedAdultCount = count;
  }
  setSelectedElderChildCount(count: any) {
    this.selectedElderChildCount = count;
  }
  setSelectedYoungerChildCount(count: any) {
    this.selectedYoungerChildCount = count;
  }
  setSelectedBabiesCount(count: any) {
    this.selectedBabiesCount = count;
  }
  getSelectedAdultCount() {
    return this.selectedAdultCount;
  }
  getSelectedElderChildCount() {
    return this.selectedElderChildCount;
  }
  getSelectedYoungerChildCount() {
    return this.selectedYoungerChildCount;
  }
  getSelectedBabiesCount() {
    return this.selectedBabiesCount;
  }
}
