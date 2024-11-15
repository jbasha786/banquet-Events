import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-host-details',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './host-details.component.html',
  styleUrl: './host-details.component.scss'
})
export class HostDetailsComponent {

  @Input() hostInfo : any;

}
