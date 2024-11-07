import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatButtonModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})

export class DialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }
  confirm(): void {
    this.dialogRef.close();
  }
}
