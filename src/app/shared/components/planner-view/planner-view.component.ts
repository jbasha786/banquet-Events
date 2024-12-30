import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-planner-view',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './planner-view.component.html',
  styleUrl: './planner-view.component.scss'
})
export class PlannerViewComponent {

}
