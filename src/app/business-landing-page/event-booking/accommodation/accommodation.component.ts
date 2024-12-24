import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TimePartComponent } from '../time-part/time-part.component';

@Component({
  selector: 'app-accommodation',
  standalone: true,
  imports: [MatFormFieldModule,MatDatepickerModule, MatDialogModule],
  templateUrl: './accommodation.component.html',
  styleUrl: './accommodation.component.scss'
})
export class AccommodationComponent {

  constructor(private dialog: MatDialog) {}

  timePart() {
   const accommodationRef =  this.dialog.open(TimePartComponent, {
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
