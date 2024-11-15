import { Injectable } from '@angular/core';
import { EventPlanModel } from '../../_models/event-plan.model';

@Injectable({
  providedIn: 'root'
})
export class EventPlanService {

  selectedEventPlan!: EventPlanModel;

  constructor() { }

  addSelectedEventPlan(item: EventPlanModel) {
    this.selectedEventPlan = item;
  }

  getSelectedPlan() {
    return this.selectedEventPlan;
  }
}
