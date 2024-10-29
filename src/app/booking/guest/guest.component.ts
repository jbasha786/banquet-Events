import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card'
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-guest',
  standalone: true,
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './guest.component.html',
  styleUrl: './guest.component.scss'
})
export class GuestComponent {

}
