import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-booking-details',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
})
export class BookingDetailsComponent implements OnInit {
  isSmallScreen = false;
  bookingdetailsInfo: any[] = [];
  customerDetailsInfo: any[] = [];
  paymentDetailsInfo: any[] = [];
  hostInfo: any[] = [];

 
  constructor(private defaultService: DefaultService) {}

  ngOnInit(): void {
    this.getInitialData();
    if (typeof window !== 'undefined') {
      this.isSmallScreen = window.innerWidth < 768;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    if (typeof window !== 'undefined') {
      this.isSmallScreen = (event.target as Window).innerWidth < 768;
    }
  }
  getInitialData(): void {
    this.defaultService.getJSON().subscribe(
      (result: any) => {
        this.bookingdetailsInfo = result?.bookingdetails || [];
        this.customerDetailsInfo = result?.customerDetails || [];
        this.paymentDetailsInfo = result?.paymentDetails || [];
        this.hostInfo = result?.host || [];
      },
      (error: any) => {
        console.error('Error fetching booking details:', error);
      }
    );
  }
}
