import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HallDetailComponent } from '../hall-detail/hall-detail.component';

@Component({
  selector: 'app-right-pannel',
  standalone: true,
  imports: [CommonModule, FormsModule, HallDetailComponent],
  templateUrl: './right-pannel.component.html',
  styleUrl: './right-pannel.component.scss'
})
export class RightPannelComponent {
  showHallDetails = false;
  mainItems = [
    {
      label: 'Large Halls',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Plaza', checked: false },
        { label: 'Purple', checked: false },
        { label: 'Foyer', checked: false }
      ]
    },
    {
      label: 'Meeting Rooms',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Magenta', checked: false },
        { label: 'Jade', checked: false },
        { label: 'sand', checked: false },
        { label: 'Indigo', checked: false },
        { label: 'Maroon', checked: false },
        { label: 'Lime', checked: false },
        { label: 'Amber', checked: false },
        { label: 'Sand', checked: false }
      ]
    },
    {
      label: 'Cafe Streets',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Plaza', checked: false },
        { label: 'Purple', checked: false },
        { label: 'Foyer', checked: false }
      ]
    },
    {
      label: 'Restaurants',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Plaza', checked: false },
        { label: 'Purple', checked: false },
        { label: 'Foyer', checked: false }
      ]
    },
    {
      label: 'Doppers',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Plaza', checked: false },
        { label: 'Purple', checked: false },
        { label: 'Foyer', checked: false }
      ]
    },
    {
      label: 'Meeting Rooms',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Plaza', checked: false },
        { label: 'Purple', checked: false },
        { label: 'Foyer', checked: false }
      ]
    },
    {
      label: 'Magenta',
      checked: false,
      showDropdown: false,
      subItems: [
        { label: 'Plaza', checked: false },
        { label: 'Purple', checked: false },
        { label: 'Foyer', checked: false }
      ]
    },
  ];

  toggleDropdown(index: number) {
    this.mainItems.forEach((item, i) => {
      item.showDropdown = i === index ? !item.showDropdown : false;
    });
  }
  openHallDetails() {
    this.showHallDetails = true;
  }
}
