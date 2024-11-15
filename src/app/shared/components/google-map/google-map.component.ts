import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-google-map',
  standalone: true,
  imports: [GoogleMapsModule],
  templateUrl: './google-map.component.html',
  styleUrl: './google-map.component.scss'
})
export class GoogleMapComponent {

  options: google.maps.MapOptions = {
    center: {lat: 17.447412, lng: 78.376228},
    zoom: 4
  };

}
