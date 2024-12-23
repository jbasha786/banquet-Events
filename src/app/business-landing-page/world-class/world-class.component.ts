import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-world-class',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './world-class.component.html',
  styleUrl: './world-class.component.scss'
})
export class WorldClassComponent {

  worldClass : any = [
    {id:1, value: '2.5x', text:'Source 2.5 times faster than traditional TMCs'},
    {id:2, value: '12%', text:'Save 12% on your entire T&E budget'},
    {id:3, value: '9.6%', text:'Save 12% on your entire T&E budget'}
  ];

}
