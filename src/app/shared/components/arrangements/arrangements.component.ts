import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-arrangements',
  standalone: true,
  templateUrl: './arrangements.component.html',
  styleUrl: './arrangements.component.scss'
})
export class ArrangementsComponent {
    @Input() arrangementsInfo: any;

    ngOnInit() {
    }
}
