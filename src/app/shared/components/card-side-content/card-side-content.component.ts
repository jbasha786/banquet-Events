import { Component, Input } from '@angular/core';
import { ButtonComponent } from '../../genericComponents/button/button.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-side-content',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './card-side-content.component.html',
  styleUrl: './card-side-content.component.scss'
})
export class CardSideContentComponent {
  @Input() dataContext: any;

  constructor(private router: Router){}
  ngOnInit() {
  }
  booknowDarts(){
    this.router.navigate(['events']);
  }
}
