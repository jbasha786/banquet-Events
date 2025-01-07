import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {
  CdkDragDrop,
  moveItemInArray,
  CdkDragPlaceholder,
  CdkDrag,
  CdkDropList,
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-time-part',
  standalone: true,
  imports: [MatDialogModule, CommonModule, CdkDropList, CdkDrag, CdkDragPlaceholder],
  templateUrl: './time-part.component.html',
  styleUrl: './time-part.component.scss'
})
export class TimePartComponent {

  selectedItemId: number = 1;

  timeParts: any = [
    {id:1, timeSlot: "08:30 AM - 09:00 AM", location: "Reception Foyer and Magenta", isActive: true, src:"/assets/images/icons/edit_icon.svg"},
    {id:2, timeSlot: "09:00 AM - 12:00 PM", location: "Start meeting Magenta", isActive: false, src:"/assets/images/icons/edit_icon.svg"},
    {id:3, timeSlot: "12:00 PM - 1:00 PM", location: "Lunch Foyer and Magenta", isActive: false, src:"/assets/images/icons/edit_icon.svg"},
    {id:4, timeSlot: "1:00 PM – 3:00 PM", location: "Lunch Foyer and Magenta", isActive: false, src:"/assets/images/icons/edit_icon.svg"},
    {id:5, timeSlot: "3:00 PM – 3:15 PM", location: "Reception Foyer and Magenta", isActive: false, src:"/assets/images/icons/edit_icon.svg"},
    {id:6, timeSlot: "3:15 PM - 4:30 PM", location: "Continued Magenta meeting", isActive: false, src:"/assets/images/icons/edit_icon.svg"},
    {id:7, timeSlot: "4:30 PM", location: "End of meeting", isActive: false, src:"/assets/images/icons/edit_icon.svg"}
  ]

  constructor(private dialogRef: MatDialogRef<TimePartComponent>) {
    dialogRef.disableClose = true; 
  }

  close() {
    this.dialogRef.close();
  }

  selectTimePart(item: any) {
    item.isActive = true;
    this.selectedItemId = item.id;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.timeParts, event.previousIndex, event.currentIndex);
  }

  editTimePart(item: any) {
    console.log(item)
  }
}
