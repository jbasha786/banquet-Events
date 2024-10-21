import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  @Input() picture: any;
  @Input() title: any;
  @Input() desc: any;
  @Input() btn: any;

  ngOnInIt() {
    console.log(this.picture, this.title, this.desc)
  }

}
