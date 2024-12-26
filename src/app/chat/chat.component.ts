import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss'
})
export class ChatComponent {
  inputBackgroundColor: string = ''; 
  inputTextColor: string = '';       
  inputBorderColor: string = '';
  changeInputStyle(event: Event): void {
    const inputValue = (event.target as HTMLInputElement).value;
    if (inputValue) {
      this.inputBackgroundColor = '#ffffff'; 
      this.inputTextColor = '#081A51'; 
      this.inputBorderColor = '#bbbbbb';    
    } else {
      this.inputBackgroundColor = '';  
      this.inputTextColor = ''; 
      this.inputBorderColor = ''; 
    }
  }

  isChatBotVisible: boolean = false;
  onClose(): void {
    this.isChatBotVisible = false; 
  }
 
  OnClick(): void {
    this.isChatBotVisible = !this.isChatBotVisible;
  }


}
