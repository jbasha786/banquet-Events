import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-side-content',
  standalone: true,
  imports: [],
  templateUrl: './card-side-content.component.html',
  styleUrl: './card-side-content.component.scss'
})
export class CardSideContentComponent {
  @Input() dataContext: any;

  ngOnInit() {
  }

}
