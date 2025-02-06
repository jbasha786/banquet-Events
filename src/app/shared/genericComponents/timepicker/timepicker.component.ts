import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: 'app-timepicker',
  standalone: true,
  imports: [NgxMatTimepickerModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule],
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class TimepickerComponent {
  selectedTimefromPicker: any
  @Input() calssName: string = '';
  @Input() matPickerClass: string = '';
  @Input() placeHolderText: string = '';
  @Output() selectedTime = new EventEmitter<any>();


  onTimeChange(newTime: any) {
    this.selectedTime.emit(newTime);
  }
}
