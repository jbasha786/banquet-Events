import { Component, ViewChild, ViewEncapsulation} from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';
import { MyBookingCradComponent } from '../shared/components/my-booking-crad/my-booking-crad.component';
import { DefaultService } from '../services/default.service';
import { bookingHistoryModel } from '../shared/_models/bookingHistoryModel';
import { InvoiceHistoryComponent } from '../invoice-history/invoice-history.component';
import {MatTabsModule} from '@angular/material/tabs';
import { BookingHistoryViewComponent } from '../booking-history-view/booking-history-view.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-booking-history',
  standalone: true,
  imports: [MatTabsModule,InvoiceHistoryComponent,BookingHistoryViewComponent, CommonModule],
  templateUrl: './booking-history.component.html',
  styleUrl: './booking-history.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class BookingHistoryComponent {
  @ViewChild('tabGroup') tabGroup!: MatTabGroup;
  showSearchBar: boolean = true;
  activeLabel: number = 1;
  
  constructor() { }
  ngOnInit() {}

  selectTab(index: any): void {
    this.tabGroup.selectedIndex = index;
    this.updateSearchBarVisibility(index);
    this.activeLabel = index;
  }

  onTabChange(index: any): void {
    this.updateSearchBarVisibility(index);
  }

  private updateSearchBarVisibility(index: any): void {
    this.showSearchBar = index !== 1; 
  }
}
