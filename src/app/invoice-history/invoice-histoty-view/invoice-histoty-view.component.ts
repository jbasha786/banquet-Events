import { Component } from '@angular/core';
import { DefaultService } from '../../services/default.service';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-invoice-histoty-view',
  standalone: true,
  imports: [MatIconModule, MatDialogModule],
  templateUrl: './invoice-histoty-view.component.html',
  styleUrl: './invoice-histoty-view.component.scss'
})
export class InvoiceHistotyViewComponent {

  InvoiceViewData: any;
  constructor(private defaultService: DefaultService,
    public dialog: MatDialogRef<InvoiceHistotyViewComponent>
  ) { }

  ngOnInit(): void {
    this.getInvoiceData();
  }

  getInvoiceData() {
    this.defaultService.getJSON().subscribe(result => {
      this.InvoiceViewData = result.invoiceView;
    })
  }

  close() {
    this.dialog.close();
  }

}
