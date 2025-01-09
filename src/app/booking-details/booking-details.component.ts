import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultService } from '../services/default.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../shared/components/dialogue/dialogue.component';
import { SuccessDialogueComponent } from '../shared/components/success-dialogue/success-dialogue.component';

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

 
  constructor(private defaultService: DefaultService, private dialog: MatDialog) {}

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
 cancelReservation() {
    const screenWidth = window.innerWidth;
    this.dialog.open(DialogueComponent, {
      backdropClass: 'custom-dialog-backdrop', 
      panelClass: 'custom-dialog-panel', 
      width: "550px",
      disableClose: true,
    });
  }
  successReservation() {
    const screenWidth = window.innerWidth;
    this.dialog.open(SuccessDialogueComponent, {
      backdropClass: 'custom-dialog-success-backdrop', 
      panelClass: 'custom-dialog-success-panel', 
      width: "550px",
    });
  }
}
