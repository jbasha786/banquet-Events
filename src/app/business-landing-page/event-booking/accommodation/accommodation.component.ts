import { Component, Input } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimePartComponent } from '../time-part/time-part.component';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [MatFormFieldModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatIconModule,
    MatIcon,
    CommonModule,
    FormsModule,
    NgxMatTimepickerModule],
  providers: [],
  templateUrl: './accommodation.component.html',
  styleUrl: './accommodation.component.scss'
})
export class AccommodationComponent {

  constructor(private dialog: MatDialog) { }

  timePart() {
    const accommodationRef = this.dialog.open(TimePartComponent, {
      width: "800px",
      disableClose: true,
      data: "",
      panelClass: "timePartLocation",
    });

    accommodationRef.afterClosed().subscribe(data => {
      console.log(data);
    })
  }

}
