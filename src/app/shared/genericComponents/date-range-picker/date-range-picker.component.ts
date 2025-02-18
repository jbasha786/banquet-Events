import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ZindexService } from '../../../services/zindex.service';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [MatFormFieldModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    CommonModule],
  templateUrl: './date-range-picker.component.html',
  styleUrl: './date-range-picker.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class DateRangePickerComponent {
  startDate!: any;
  endDate!: any;
  @Input() className: string = '';
  @Input() matPickerClass: string = '';
  @Input() placeholderClass1: string = '';
  @Input() placeholderClass2: string = '';
  @Output() selectedDate: EventEmitter<{ startDate: any, endDate: any }> = new EventEmitter();

  constructor(private zindexService: ZindexService) { }

  dateRangeChange(dateRangeStart: HTMLInputElement, dateRangeEnd: HTMLInputElement) {
    this.selectedDate.emit({
      startDate: dateRangeStart.value,
      endDate: dateRangeEnd.value
    })
  }

  onDatepickerOpened() {
    this.zindexService.setHeaderZIndex(1000);
    const backdrop = document.querySelector('.cdk-overlay-backdrop') as HTMLElement;
    if (backdrop) {
      backdrop.classList.add('custom-backdrop');
    }
  }
  onDatepickerClosed() {
    this.zindexService.setHeaderZIndex(1030);
    const backdrop = document.querySelector('.cdk-overlay-backdrop') as HTMLElement;
    if (backdrop) {
      backdrop.classList.remove('custom-backdrop');
    }

  }
}
