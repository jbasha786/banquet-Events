import { Component } from '@angular/core';
import { PlannerCalendarComponent } from '../shared/components/planner-calendar/planner-calendar.component';
import { PlannerViewComponent } from '../shared/components/planner-view/planner-view.component';

@Component({
  selector: 'app-planner',
  standalone: true,
  imports: [PlannerCalendarComponent, PlannerViewComponent],
  templateUrl: './planner.component.html',
  styleUrl: './planner.component.scss'
})
export class PlannerComponent {

}
