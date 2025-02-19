import { CommonModule } from '@angular/common';
import { Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';
import { ZindexService } from '../../../services/zindex.service';

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
  @Input() classNames!: string

  constructor(private zindexService: ZindexService) { }

  dateChange(event: any) {
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
