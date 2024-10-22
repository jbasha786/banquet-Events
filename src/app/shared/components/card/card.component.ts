import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() picture: any;
  @Input() title: string | undefined;
  @Input() desc: any;
  @Input() btn: any;

  ngOnInIt() {
  }

}
