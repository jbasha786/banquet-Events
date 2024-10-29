import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { DefaultService } from '../../services/default.service';
import { MatButtonModule } from '@angular/material/button';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';


@Component({
  selector: 'app-list-of-halls',
  standalone: true,
  imports: [MatFormFieldModule, 
    MatInputModule, 
    MatDatepickerModule, 
    MatIconModule, 
    MatButtonModule,
    NgxMatTimepickerModule],
  templateUrl: './list-of-halls.component.html',
  styleUrl: './list-of-halls.component.scss'
})
export class ListOfHallsComponent {

  hallsList: any;

  constructor(private defaultService: DefaultService) { }

  ngOnInit() {
    this.getHalsList();
  }

  getHalsList() {
    const path = '/assets/InitialData/InitialScreen.json';
    this.defaultService.getJSON(path).subscribe(result => {
      this.hallsList = result.hallsList;
    })
  }

}
