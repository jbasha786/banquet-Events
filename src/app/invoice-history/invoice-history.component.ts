import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InvoiceHistotyViewComponent } from './invoice-histoty-view/invoice-histoty-view.component';
import { DefaultService } from '../services/default.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { invoiceHistoryModel } from '../shared/_models/invoiceHistory.model'

@Component({
  selector: 'app-invoice-history',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatTableModule,
  ],
  templateUrl: './invoice-history.component.html',
  styleUrl: './invoice-history.component.scss'
})
export class InvoiceHistoryComponent {


  displayedColumns: string[] = ['date', 'invoiceNumber', 'itemDetails', 'type', 'amount', 'actions'];
  data: any[] = [];

  dataSource = new MatTableDataSource<any>([]);
  constructor(public dialog: MatDialog, private defaultService: DefaultService) { }

  ngOnInit(): void {
    this.getInitialData();
  }
  overview() {
    this.dialog.open(InvoiceHistotyViewComponent, {
      width: "700px",
      height: "600px"
    })
  }
  getInitialData() {
    this.defaultService.getJSON().subscribe(result => {
      this.dataSource = result?.invoice_historyTable;
    })
  }
}
