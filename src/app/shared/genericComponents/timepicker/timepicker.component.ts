import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
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
    MatIconModule],
  templateUrl: './timepicker.component.html',
  styleUrl: './timepicker.component.scss'
})
export class TimepickerComponent {
  @Input() calssName: string = '';
  @Input() matPickerClass: string = '';
  @Input() placeHolderText: string = '';

}
