import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() btnName: string = '';
  @Input() btnClass: string = '';
  @Output() bannerActionEvent = new EventEmitter<boolean>();


  buttonAction() {
    this.bannerActionEvent.emit(true);
  }
}
