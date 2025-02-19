import { Component, Input, ViewEncapsulation } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimePartComponent } from '../time-part/time-part.component';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { ButtonComponent } from '../../../shared/genericComponents/button/button.component';
import { TimepickerComponent } from '../../../shared/genericComponents/timepicker/timepicker.component';
import { DateRangePickerComponent } from '../../../shared/genericComponents/date-range-picker/date-range-picker.component';
import { CustomDialogService } from '../../../services/custom-dialog.service';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    CommonModule,
    FormsModule,
    ButtonComponent,
    NgxMatTimepickerModule,
    TimepickerComponent,
    DateRangePickerComponent],
  providers: [],
  templateUrl: './accommodation.component.html',
  styleUrl: './accommodation.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class AccommodationComponent {

  constructor(private dialog: MatDialog,
    private customDialogService: CustomDialogService
  ) { }

  timePart() {
    const dialogRef = this.customDialogService.openDialog(TimePartComponent, {
      width: "800px",
      disableClose: true,
      data: "",
      panelClass: "timePartLocation",
    });

    dialogRef.afterClosed().subscribe(data => {
      console.log(data);
    });
  }

  selectedStartTime(event: any) {
    console.log(event);

  }
  selectedEndTime(event: any) {
    console.log(event);
  }

  selectedDateRange(event: { startDate: any, endDate: any }) {
    console.log(event);
  }

}
