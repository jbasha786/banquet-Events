import { SelectionModel } from '@angular/cdk/collections';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { MatDialogActions, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialog } from '@angular/material/dialog';
import { DefaultService } from '../../../services/default.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [MatIconModule, MatCheckboxModule, MatTableModule, MatDialogActions],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {

  displayedColumns: string[] = ['select', 'name', 'price', 'qty', 'time', 'total'];
  dataSource = new MatTableDataSource<any>([]);
  selection = new SelectionModel<any>(true, []);

  constructor(
    public dialogRef: MatDialogRef<ArticlesComponent>,
    private dialog: MatDialog,
    private router: Router,
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
      this.dataSource = new MatTableDataSource(result?.addArticles || []);
    })
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource?.data?.length;
    return numSelected === numRows;
  }

  toggleAllRows(checked: boolean) {
    if (checked) {
      this.selection.select(...this.dataSource.data); 
    } else {
      this.selection.clear();
    }
  }

  checkboxLabel(row?: any): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  updateValue(element: any, event: any, key: string): void {
    element[key] = event.target.value; 
  }
  onSave(): void {
    this.dialogRef.close();
  }
}
