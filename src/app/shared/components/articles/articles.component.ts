import { SelectionModel } from '@angular/cdk/collections';
import { Component } from '@angular/core';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DefaultService } from '../../../services/default.service';


@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatIconModule, MatCheckboxModule, MatTableModule, MatDialogActions],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  displayedColumns: string[] = ['select', 'name', 'price', 'qty', 'total'];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  constructor(
    public dialogRef: MatDialogRef<ArticlesComponent>,
    private defaultService: DefaultService
  ) {
    this.getInitalData();
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  doSomething() { }

  getInitalData() {
    this.defaultService.getJSON().subscribe(result => {
      this.dataSource = result?.addArticles;
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource?.data);
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  updateQty(item: any, event: any) {
    item.qty = event.data;
  }
}
