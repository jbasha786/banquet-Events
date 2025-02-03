import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ButtonComponent } from '../../genericComponents/button/button.component';

@Component({
  selector: 'app-dialogue',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent, MatButtonModule, ButtonComponent],
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})

export class DialogueComponent {
  cancelBtn: string = "No";
  confirmBtn: string = "Yes";
  constructor(
    public dialogRef: MatDialogRef<DialogueComponent>,
    private router: Router
  ) { }

  cancel(): void {
    this.dialogRef.close();
  }
  confirm(): void {
    this.dialogRef.close();
  }
}
