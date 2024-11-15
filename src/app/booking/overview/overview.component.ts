import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { DefaultService } from '../../services/default.service';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { ThingsToKnowComponent } from '../../shared/components/things-to-know/things-to-know.component';
import { GoogleMapComponent } from '../../shared/components/google-map/google-map.component';
import { AmenitiesComponent } from '../../shared/components/amenities/amenities.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatInputModule } from '@angular/material/input';
import { HostDetailsComponent } from './host-details/host-details.component';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    MatIconModule,
    MatCardModule,
    CommonModule,
    MatTableModule,
    MatButtonModule,
    ThingsToKnowComponent,
    GoogleMapComponent,
    AmenitiesComponent,
    MatFormFieldModule,
    MatDatepickerModule,
    NgxMatTimepickerModule,
    MatInputModule,
    HostDetailsComponent],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {

  ItemDetails: any
  articlesList: any;
  hostDetails: any;
  displayedColumns: string[] = ['name', 'price', 'Qty', 'tPrice'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data: any[] = [];
  constructor(private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.getInitialData();

  }


  getInitialData() {
    this.defaultService.getJSON().subscribe(result => {
      this.ItemDetails = result?.overview;
      this.data = result?.articles;
      this.hostDetails = result?.hostDetails[0];
    })
  };

  getTotalCost() {
    let final = 0
    this.data.map(t => t.tPrice).map((acc, value) => {
      final = final + acc
    });
    return final;
  }

}
