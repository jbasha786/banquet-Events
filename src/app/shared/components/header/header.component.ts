import { Component, Input } from '@angular/core';
import { DefaultService } from '../../../services/default.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() headerInfo: any;

}
