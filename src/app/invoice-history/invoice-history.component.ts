import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { InvoiceHistotyViewComponent } from './invoice-histoty-view/invoice-histoty-view.component';

@Component({
  selector: 'app-invoice-history',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './invoice-history.component.html',
  styleUrl: './invoice-history.component.scss'
})
export class InvoiceHistoryComponent {

  constructor(public dialog: MatDialog) {}
  view(){
    this.dialog.open(InvoiceHistotyViewComponent, {
      width: "700px",
      height: "600px"
    })
  }
}
