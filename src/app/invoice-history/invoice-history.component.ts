import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InvoiceHistotyViewComponent } from './invoice-histoty-view/invoice-histoty-view.component';
import { DefaultService } from '../services/default.service';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { invoiceHistoryModel } from '../shared/_models/invoiceHistory.model'
import { ZindexService } from '../services/zindex.service';
import { CustomDialogService } from '../services/custom-dialog.service';
import { ChooseMenuComponent } from '../shared/components/choose-menu/choose-menu.component';

@Component({
  selector: 'app-invoice-history',
  standalone: true,
  imports: [MatDialogModule, CommonModule, MatTableModule,
  ],
  templateUrl: './invoice-history.component.html',
  styleUrl: './invoice-history.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class InvoiceHistoryComponent {


  displayedColumns: string[] = ['date', 'invoiceNumber', 'itemDetails', 'type', 'amount', 'actions'];
  data: any[] = [];

  dataSource = new MatTableDataSource<any>([]);
  constructor(public dialog: MatDialog, private defaultService: DefaultService,
    private zIndexService: ZindexService,
    private customDialogService: CustomDialogService) { }

  ngOnInit(): void {
    this.getInitialData();
  }
  overview() {
    this.zIndexService.setHeaderZIndex(1000);
    const dialogRef = this.customDialogService.openDialog(InvoiceHistotyViewComponent, {
      panelClass: 'invoive-view',
      backdropClass: 'custom-backdrop',
      width: "530px",
      height: "75vh",
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(() => {
      this.zIndexService.setHeaderZIndex(1030);
    });
  }
  getInitialData() {
    this.defaultService.getJSON().subscribe(result => {
      this.dataSource = result?.invoice_historyTable;
    })
  }
}
