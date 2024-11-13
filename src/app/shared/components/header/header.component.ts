import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DefaultService } from '../../../services/default.service';
import { headerModel } from '../../_models/headerModel';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../core/login/login.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent,
    RouterLink,
    MatMenuModule,
    MatButtonModule,
    DialogueComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Input() headerInfo: any;
  navList: headerModel[] = [];
  navEvent_Items: headerModel[] = [];
  openpopup: boolean = false;

  constructor(private router: Router,
    private defaultService: DefaultService,
    private overlayContainer: OverlayContainer,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getNavList();
    this.getnavEventList();
  }

  getNavList() {
    this.defaultService.getJSON().subscribe(result => {
      this.navList = result.navList;
    })
  }

  getnavEventList() {
    this.defaultService.getJSON().subscribe(result => {
      this.navEvent_Items = result.navEvent_Items;
    })
  }

  goToHome() {
    this.router.navigate(['']);
  }

  goTo(link: any) {
    this.router.navigate([link]);
  }
}
