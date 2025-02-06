import { Component } from '@angular/core';
import { DefaultService } from '../../services/default.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-histoty-view',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './invoice-histoty-view.component.html',
  styleUrl: './invoice-histoty-view.component.scss'
})
export class InvoiceHistotyViewComponent {

  InvoiceViewData: any;
  private routerSubscription: Subscription;
  constructor(private defaultService: DefaultService,
    private router: Router,
    public dialogRef: MatDialogRef<InvoiceHistotyViewComponent>,
    public dialog: MatDialogRef<InvoiceHistotyViewComponent>
  ) { 
    this.routerSubscription = this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        this.dialogRef.close();
      }
    });
  }

  ngOnInit(): void {
    this.getInvoiceData();
  }

  getInvoiceData() {
    this.defaultService.getJSON().subscribe(result => {
      this.InvoiceViewData = result.invoiceView;
    })
  }
  closeDialog() {
    this.dialogRef.close();
  }
  ngOnDestroy(): void {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

}
