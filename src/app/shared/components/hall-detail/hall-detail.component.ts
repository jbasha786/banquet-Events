import { Component } from '@angular/core';

@Component({
  selector: 'app-hall-detail',
  standalone: true,
  imports: [],
  templateUrl: './hall-detail.component.html',
  styleUrl: './hall-detail.component.scss'
})
export class HallDetailComponent {

  description: string = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. It is a long established fact that a reader will be distracted by the readable content of a page..."
  shapes: any = [
    { id: 1, name: "Theater Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/Theater_Style.svg", isActive: true },
    { id: 2, name: "Board Room Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/Board_Room_Style.svg", isActive: false },
    { id: 3, name: "U-Shape Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/U-Shape_Style.svg", isActive: false },
    { id: 4, name: "Wedding Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/Wedding_Style.svg", isActive: false },
    { id: 5, name: "Herringbone Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/Herringbone_Style.svg", isActive: false },
    { id: 6, name: "Hollow Square Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/Hollow_Square_Style.svg", isActive: false },
    { id: 7, name: "Class Room Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/Class_Room_Style.svg", isActive: false },
    { id: 8, name: "T-Shape Style", price: "€ 15.40", src: "/assets/images/businessEvents/shapes/T-Shape_Style.svg", isActive: false }
  ]
}
