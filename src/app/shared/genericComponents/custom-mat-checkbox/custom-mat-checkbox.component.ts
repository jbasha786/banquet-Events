import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatCheckboxChange, MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  selector: 'app-custom-mat-checkbox',
  standalone: true,
  imports: [MatCheckboxModule],
  templateUrl: './custom-mat-checkbox.component.html',
  styleUrl: './custom-mat-checkbox.component.scss'
})
export class CustomMatCheckboxComponent {
  @Input() label: string = ''; 
  @Input() indeterminate: boolean = false;
  @Input() checked: boolean = false; 
  @Input() disableRipple: boolean = false;
  @Output() checkedChange = new EventEmitter<boolean>(); 
  @Input() ariaLabel: string = '';

  onCheckboxChange(event: MatCheckboxChange) {
    this.checkedChange.emit(event.checked);
  }
  
}
