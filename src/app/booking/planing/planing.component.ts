import { Component } from '@angular/core';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';
import { DefaultService } from '../../services/default.service';
import { EventPlanService } from '../../services/event-plan/event-plan.service';

@Component({
  selector: 'app-planing',
  standalone: true,
  imports: [MatListModule],
  templateUrl: './planing.component.html',
  styleUrl: './planing.component.scss'
})
export class PlaningComponent {

  planningData: any;

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
    this.eventPlanService.addSelectedEventPlan(e.options[0].value);
  }

}
