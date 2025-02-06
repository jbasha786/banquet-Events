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
import { ButtonComponent } from '../../genericComponents/button/button.component';
import { CustomMatCheckboxComponent } from '../../genericComponents/custom-mat-checkbox/custom-mat-checkbox.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatCheckboxModule, MatTableModule, MatIconModule, MatDialogActions, FormsModule, ButtonComponent, CustomMatCheckboxComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  saveBtn:string = "Save";
  searchQuery: string = '';
  displayedColumns: string[] = ['select', 'name', 'qty', 'price',];
  startersDataSource = new MatTableDataSource<any>([]);
  mainCourseDataSource = new MatTableDataSource<any>([]);
  selectionStarters = new SelectionModel<any>(true, []);
  selectionMainCourse = new SelectionModel<any>(true, []);

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
      this.startersDataSource.data = result?.menuStarters || [];
      this.mainCourseDataSource.data = result?.menuMainCourse || [];
    })
  }

  updateQty(item: any, event: any) {
    item.qty = event.target.value;
  }

  isAllSelected(selection: SelectionModel<any>, dataSource: MatTableDataSource<any>): boolean {
    const numSelected = selection.selected.length;
    const numRows = dataSource.data.length;
    return numSelected === numRows && numRows > 0;
  }

  checkboxLabel(selection: SelectionModel<any>, row?: any): string {
    if (!row) {
      return `${this.isAllSelected(selection, this.startersDataSource) ? 'Deselect' : 'Select'} all`;
    }
    return `${selection.isSelected(row) ? 'Deselect' : 'Select'}`;
  }

  toggleAllRows(isChecked: boolean, selection: SelectionModel<any>, dataSource: MatTableDataSource<any>) {
    if (isChecked) {
      selection.select(...dataSource.data);
    } else {
      selection.clear();
    }
  }
  onRowCheckboxChange(isChecked: boolean, selection: SelectionModel<any>, row: any) {
    if (isChecked) {
      selection.select(row);
    } else {
      selection.deselect(row);
    }
  }
  

  closeDialog() {
    this.dialogRef.close();
  }

  onSave(): void {
    this.dialogRef.close();
  }
}
