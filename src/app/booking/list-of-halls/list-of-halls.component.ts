import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DefaultService } from '../../services/default.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { CommonModule } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../../shared/components/dialogue/dialogue.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-list-of-halls',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    NgxMatTimepickerModule,
    CommonModule],
  templateUrl: './list-of-halls.component.html',
  styleUrl: './list-of-halls.component.scss'
})
export class ListOfHallsComponent {

  hallsList: any;
  reserveBtn: boolean = true;

  constructor(private defaultService: DefaultService,
    private dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit() {
    this.getHalsList();
  }

  getHalsList() {
    this.defaultService.getJSON().subscribe(result => {
      this.hallsList = result.hallsList;
    })
  }

  cancelReservation() {
    this.dialog.open(DialogueComponent, {
      width:"500px",
      disableClose: true
    });
   }
  reserve() {
    this.reserveBtn = false;
  }

  getDetails(){
    this.dialog.closeAll();
    this.router.navigate(['overview']);
  }

}
