import { Component } from '@angular/core';
import { menuModel } from '../../../_models/menu.model';
import { DefaultService } from '../../../services/default.service';
import { MatDialog, MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatIconModule, MatDialogActions, FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  searchQuery: string = '';
  isIconDisabled: boolean = false;
  displayedColumns: string[] = ['select', 'name', 'qty', 'price',];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  constructor(
    public dialogRef: MatDialogRef<MenuComponent>,
    private dialog: MatDialog,
    private router: Router,
    private defaultService: DefaultService
  ) {
  }

  ngOnInit(): void {
    this.getInitalData();
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

  closeDialog() {
    this.dialogRef.close();
  }
  hideIcon() {
    this.isIconDisabled = true;
  }
  onInputChange(): void {
    this.isIconDisabled = this.searchQuery.trim().length > 0;
  }
  onSave(): void {
    this.dialog.closeAll();
    this.router.navigate(['hallsList']);
  }
}
