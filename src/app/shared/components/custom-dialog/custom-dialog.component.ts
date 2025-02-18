import { CommonModule } from '@angular/common';
import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ButtonComponent } from '../../genericComponents/button/button.component';

@Component({
  selector: 'app-custom-dialog',
  templateUrl: './custom-dialog.component.html',
  standalone: true,
  imports: [CommonModule,
    ButtonComponent, MatDialogModule
  ],
  styleUrl: './custom-dialog.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class CustomDialogComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<CustomDialogComponent>
  ) {
    console.log('Dialog received data:', this.data);
  }

  closeDialog(result: boolean) {
    this.dialogRef.close(result);
  }
}
