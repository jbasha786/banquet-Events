import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/genericComponents/button/button.component';

@Component({
  selector: 'app-corporate-meeting',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './corporate-meeting.component.html',
  styleUrl: './corporate-meeting.component.scss'
})
export class CorporateMeetingComponent {

}
