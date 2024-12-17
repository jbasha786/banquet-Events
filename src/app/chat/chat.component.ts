import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  isChatBotVisible: boolean = false;
  onClose(): void {
    this.isChatBotVisible = false; 
  }
 
  OnClick(): void {
    this.isChatBotVisible = !this.isChatBotVisible;
  }

}
