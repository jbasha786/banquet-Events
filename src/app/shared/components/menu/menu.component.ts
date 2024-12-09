import { Component } from '@angular/core';
import { menuModel } from '../../../_models/menu.model';
import { DefaultService } from '../../../services/default.service';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatIconModule, MatDialogActions],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  
  displayedColumns: string[] = ['select','name', 'qty', 'price', ];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  constructor(
    public dialogRef: MatDialogRef<MenuComponent>,
    private defaultService: DefaultService
  ) {
  }

  ngOnInit(): void {
    this.getInitalData();
    console.log(this.dataSource,"=============")
  }

  close() {
    this.dialogRef.close();
  }

  doSomething() { }

  getInitalData() {
    this.defaultService.getJSON().subscribe(result => {
      this.dataSource = result?.menu;
    })
  }

  updateQty(item: any, event: any) {
    item.qty = event.data;
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
  
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource?.data);
  }

closeDialog(){
  this.dialogRef.close();
}
}
