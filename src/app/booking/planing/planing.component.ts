import { Component, ViewChildren, QueryList, ElementRef } from '@angular/core';
import { MatListModule, MatListOption, MatSelectionListChange } from '@angular/material/list';
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
export class PlaningComponent  {
   @ViewChildren(MatListOption, { read: ElementRef }) listOptions!: QueryList<ElementRef>;
  planningData: any;
  selectedItemId: number = 0;

  constructor(
    private defaultService: DefaultService,
    private eventPlanService: EventPlanService
  ) {}

  ngOnInit(): void {
    this.getPlanningData();
  }

  getPlanningData(): void {
    this.defaultService.getJSON().subscribe(
      result => {
        this.planningData = result.planning;
      },
      err => {
        console.log('Error for Planning API: ', err);
      }
    );
  }

  selChange(e: MatSelectionListChange) {
    e.options[0].value.isActive = true;
    this.selectedItemId = e.options[0].value.id;
    this.eventPlanService.addSelectedEventPlan(e.options[0].value);
  }

  selectPlan(plan: any) {
    this.planningData.forEach((p: any) => (p.isActive = false));
    plan.isActive = true;
    this.selectedItemId = plan.id;
    this.eventPlanService.addSelectedEventPlan(plan);
  }

  handleKeyDown(event: KeyboardEvent, plan: any) {
    const listArray = this.listOptions.toArray();
    const currentIndex = listArray.findIndex(item => item.nativeElement === event.target);
  
    if (event.key === 'Tab') {
      if (event.shiftKey) {
        
        if (currentIndex === 0) {
          return; 
        }
      } else {
        
        if (currentIndex === listArray.length - 1) {
          return; 
        }
      }
  
      event.preventDefault();
      const nextIndex = event.shiftKey ? currentIndex - 1 : currentIndex + 1;
      listArray[nextIndex].nativeElement.focus();
    }
  }
  
  

  // Function to update tabindex dynamically
  updateTabindex(activeIndex: number) {
    this.listOptions.forEach((item, index) => {
      item.nativeElement.setAttribute('tabindex', index === activeIndex ? '0' : '-1');
    });
  }
}
