import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-shapes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shapes.component.html',
  styleUrl: './shapes.component.scss'
})
export class ShapesComponent {
  shapes : any = [
    {id: 1, name: "Theater Style", src: "/assets/images/businessEvents/shapes/Theater_Style.svg"},
    {id: 2, name: "Board Room Style", src: "/assets/images/businessEvents/shapes/Board_Room_Style.svg"},
    {id: 3, name: "U-Shape Style", src: "/assets/images/businessEvents/shapes/U-Shape_Style.svg"},
    {id: 4, name: "Wedding Style", src: "/assets/images/businessEvents/shapes/Wedding_Style.svg"},
    {id: 5, name: "Herringbone Style", src: "/assets/images/businessEvents/shapes/Herringbone_Style.svg"},
    {id: 6, name: "Hollow Square Style", src: "/assets/images/businessEvents/shapes/Hollow_Square_Style.svg"},
    {id: 7, name: "Class Room Style", src: "/assets/images/businessEvents/shapes/Class_Room_Style.svg"},
    {id: 8, name: "T-Shape Style", src: "/assets/images/businessEvents/shapes/T-Shape_Style.svg"}
  ];
}
