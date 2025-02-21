import { Component } from '@angular/core';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { DefaultService } from '../../services/default.service';
import { EventPlanService } from '../../services/event-plan/event-plan.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-planing',
  standalone: true,
  imports: [MatListModule, CommonModule],
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss'
})
export class PlaningComponent {

  planningData: any;
  selectedItemId : number = 0;

  constructor(private defaultService: DefaultService,
    private eventPlanService: EventPlanService
  ) { }

  ngOnInit(): void {
    this.getPlanningData();
  }

  getPlanningData(): void {
    this.defaultService.getJSON().subscribe(result => {
      this.planningData = result.planning;
    }, err => {
      console.log('Error for Planning API: ', err);
    })
  }

  // Change selection of planning
  selChange(e: MatSelectionListChange) {
    e.options[0].value.isActive = true;
    this.selectedItemId = e.options[0].value.id;
    this.eventPlanService.addSelectedEventPlan(e.options[0].value);
  }
  selectPlan(plan: any) {
    this.planningData.forEach((p:any) => p.isActive = false); 
    plan.isActive = true; 
    this.selectedItemId = plan.id;
    this.eventPlanService.addSelectedEventPlan(plan);
  }

}
