import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-custom-mat-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './custom-mat-checkbox.component.html',
  styleUrl: './custom-mat-checkbox.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CustomMatCheckboxComponent {
  @Input() label: string = ''; 
  @Input() indeterminate: boolean = false;
  @Input() checked: boolean = false; 
  @Input() disableRipple: boolean = false;
  @Input() ariaLabel: string = ''; 
  @Input() ariaLabelledBy: string = ''; 

  @Output() checkedChange = new EventEmitter<boolean>(); 

  onCheckboxChange(event: MatCheckboxChange) {
    this.checkedChange.emit(event.checked);
  }
  onKeydown(event: KeyboardEvent) {
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault(); 
      this.checked = !this.checked; 
      this.checkedChange.emit(this.checked); 
    }
  }
}
