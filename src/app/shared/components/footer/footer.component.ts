
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footerColumns = [
    {
      title: 'Quick links',
      links: ['Mew and Upcoming events', 'Best Rate Guarantee','Activities', 'Gift Cards'],
    },
    {
      title: 'Travel Professionals',
      links: ['Partners', 'Travel Agents'],
    },
    {
      title: 'Legal',
      links: ['Privacy Center','Terms and Conditions'],
    },
    {
      title: 'Contact',
      links: ['De Bonte Wever Assen','Stadsbroek17','9405 BK ASSEN','+31 (0)592-3037770','reserveringen@debontewever.nl','KvK: 04053125'],
    },
  ];
}