import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-host-details',
  standalone: true,
  imports: [MatCardModule, CommonModule, MatIconModule],
  templateUrl: './host-details.component.html',
  styleUrl: './host-details.component.scss'
})
export class HostDetailsComponent {

  @Input() hostInfo : any;
  @Input() isEventScreen!: boolean;

}
