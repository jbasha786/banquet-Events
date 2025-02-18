import { Component, HostListener, OnInit, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultService } from '../services/default.service';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from '../shared/components/custom-dialog/custom-dialog.component';

@Component({
  selector: 'app-booking-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './booking-details.component.html',
  styleUrls: ['./booking-details.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BookingDetailsComponent implements OnInit {
  isSmallScreen = false;
  bookingdetailsInfo: any[] = [];
  customerDetailsInfo: any[] = [];
  paymentDetailsInfo: any[] = [];
  hostInfo: any[] = [];


  constructor(private defaultService: DefaultService, private dialog: MatDialog) { }

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
    this.dialog.open(CustomDialogComponent, {
      backdropClass: 'custom-dialog-backdrop',
      panelClass: 'custom-dialog-panel',
      width: "550px",
      disableClose: true,

      data: {
        title: 'Are you sure ?',
        type: 'confirm',
        bookingName: '"Queens Lagoon Suite".',
        showActions: true,
        cancelText: 'No',
        confirmText: 'Yes',
        backdropCloseButton: false,
        hideCloseButton: true
      }
    });
  }
  successReservation() {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      backdropClass: 'custom-dialog-success-backdrop',
      panelClass: 'custom-dialog-success-panel',
      width: "550px",
      data: {
        type: 'success',
        quotationId: '14324',
        backdropCloseButton: false,
        imageSrc: 'assets/images/halls/sent.gif',
        imgText: "Successfully",
        imgquote: "Quotation Sent",
        imgId: "ID: 14324",
        hideCloseButton: true
      }
    });
    setTimeout(() => {
      dialogRef.componentInstance.data.backdropCloseButton = true;
    }, 200);
  }
}
