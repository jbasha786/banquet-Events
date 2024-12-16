import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-host-details',
  standalone: true,
  imports: [MatCardModule, CommonModule],
  templateUrl: './host-details.component.html',
  styleUrl: './host-details.component.scss'
})
export class HostDetailsComponent {

  @Input() hostInfo : any;
  @Input() isEventScreen!: boolean;

}
