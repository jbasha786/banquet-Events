import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {

  @Input() carouselItem: any;

  ngOnInit() {
    console.log(this.carouselItem)
  }

}
