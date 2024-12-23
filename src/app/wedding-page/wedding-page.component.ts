import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-wedding-page',
  standalone: true,
  imports: [CommonModule, CarouselModule],
  templateUrl: './wedding-page.component.html',
  styleUrls: ['./wedding-page.component.scss'],
})
export class WeddingPageComponent {
  events = [
    {
      title: 'Queens Lagoon Suite',
      roomDetails:
        'Accommodates up to 600 members | 2020 to 2500ft² | Stage Available',
      description:
        'Hotel De Bonte Wever has a set of central channels in the lower part of the Ausgangspunkt schlechthin, which is ideal for couples in the Norden der Niederlande is the ideal place for this..',
      price: '€ 42000.00',
      images: [
        '../../assets/images/wedding/weddings events slider.svg',
        '../../assets/images/wedding/weddings events slider2.svg',
        '../../assets/images/wedding/weddings events slider3.svg',
      ],
      amenities: [
        'Private bar and terrace',
        'Meeting rooms for 6 to 55 people',
        'Various arrangements possible',
        'View of the beach',
        'Ample parking',
        'Standard capacity for events up to 170 people and expandable to 500 people',
      ],
    },

    {
      title: 'Queens Lagoon Suite',
      roomDetails:
        'Accommodates up to 600 members | 2020 to 2500ft² | Stage Available',
      description:
        'Hotel De Bonte Wever has a set of central channels in the lower part of the Ausgangspunkt schlechthin, which is ideal for couples in the Norden der Niederlande is the ideal place for this..',
      price: '€ 42000.00',
      images: [
        '../../assets/images/wedding/weddings events slider.svg',
        '../../assets/images/wedding/weddings events slider2.svg',
        '../../assets/images/wedding/weddings events slider3.svg',
      ],
      amenities: [
        'Private bar and terrace',
        'Meeting rooms for 6 to 55 people',
        'Various arrangements possible',
        'View of the beach',
        'Ample parking',
        'Standard capacity for events up to 170 people and expandable to 500 people',
      ],
    },
    {
      title: 'Queens Lagoon Suite',
      roomDetails:
        'Accommodates up to 600 members | 2020 to 2500ft² | Stage Available',
      description:
        'Hotel De Bonte Wever has a set of central channels in the lower part of the Ausgangspunkt schlechthin, which is ideal for couples in the Norden der Niederlande is the ideal place for this..',
      price: '€ 42000.00',
      images: [
        '../../assets/images/wedding/weddings events slider.svg',
        '../../assets/images/wedding/weddings events slider2.svg',
        '../../assets/images/wedding/weddings events slider3.svg',
      ],
      amenities: [
        'Private bar and terrace',
        'Meeting rooms for 6 to 55 people',
        'Various arrangements possible',
        'View of the beach',
        'Ample parking',
        'Standard capacity for events up to 170 people and expandable to 500 people',
      ],
    },
  ];
  getRoomDetailsParts(event: any) {
    return event.roomDetails.split('|').map((part: string) => part.trim());
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    items: 1,
    dots: true,
    nav: false,
  };
}
