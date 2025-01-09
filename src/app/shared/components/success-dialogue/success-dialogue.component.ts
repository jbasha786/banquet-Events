import { Component } from '@angular/core';
import { MatDialogActions, MatDialogContent, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialogue',
  standalone: true,
  imports: [MatDialogActions, MatDialogContent],
  templateUrl: './success-dialogue.component.html',
  styleUrl: './success-dialogue.component.scss'
})
export class SuccessDialogueComponent {
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogueComponent>
  ) { }

 
}
