import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBookingService {

  confirmedHallDetails: any[] = [];
  selectedStep: number = 1;
  isOverviewpageClose: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }

  setSelectedHall(event: any) {
    this.confirmedHallDetails.push(event);
  }

  getSelectedHall(): any {
    return this.confirmedHallDetails;
  }

  clearSelectedServices() {
    this.confirmedHallDetails = [];
  }

  setSelectedStepNumber(step: number) {
    this.selectedStep = step;
  }

  getSelectedStepNumber(): number {
    return this.selectedStep;
  }
  setOverviewPage(isActive: boolean) {
    return this.isOverviewpageClose.next(isActive);
  }

  getOverviewPage() {
    return this.isOverviewpageClose;
  }
}
