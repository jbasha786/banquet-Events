import { Component } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [ MatDialogActions, MatDialogContent, MatButtonModule],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})

export class DialogueComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>
  ) {}
  
  onNoClick(): void {
    this.dialogRef.close();
  }
  onYesClick(): void{
  }
}
