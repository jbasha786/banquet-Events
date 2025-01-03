import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-about-event',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './about-event.component.html',
  styleUrl: './about-event.component.scss'
})
export class AboutEventComponent {
}
