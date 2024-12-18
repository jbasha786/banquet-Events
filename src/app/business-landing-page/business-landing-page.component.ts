import { Component } from '@angular/core';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { PlayPlannedComponent } from './play-planned/play-planned.component';
import { WorldClassComponent } from './world-class/world-class.component';
import { OneControlComponent } from './one-control/one-control.component';
import { CorporateComponent } from './corporate/corporate.component';

@Component({
  selector: 'app-business-landing-page',
  standalone: true,
  imports: [HowItWorksComponent,
    PlayPlannedComponent,
    WorldClassComponent,
    OneControlComponent,
    CorporateComponent],
  templateUrl: './business-landing-page.component.html',
  styleUrl: './business-landing-page.component.scss'
})
export class BusinessLandingPageComponent {

}
