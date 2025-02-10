import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-date-picker',
  standalone: true,
  imports: [MatDatepickerModule,
    FormsModule,
    CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DatePickerComponent {
  @Input() datePickerId!: MatDatepicker<any>;
  @Input() label!: string;
  @Input() matDatepickerName!: string;
  @Input() image!: string;
  @Input() date!: Date | null;
  @Input() classNames!: string;

  dateChange(event: any){
  }
}
