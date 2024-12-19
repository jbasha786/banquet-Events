import { Component, Input, OnInit, ElementRef,  Renderer2, HostListener, ChangeDetectorRef, PLATFORM_ID, Inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DefaultService } from '../../../services/default.service';
import { headerModel } from '../../_models/headerModel';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../core/login/login.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ZindexService } from '../../../services/zindex.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent,
    RouterLink,
    MatMenuModule,
    MatButtonModule,
    DialogueComponent,
    CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  navZIndex: number = 1030;
  @Input() headerInfo: any;
  navList: headerModel[] = [];
  navEvent_Items: headerModel[] = [];
  openpopup: boolean = false;

  constructor(private router: Router,
    private defaultService: DefaultService,
    private overlayContainer: OverlayContainer,
    private dialog: MatDialog,
    private zIndexService: ZindexService,
    private renderer: Renderer2, private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustLayoutForMobile();

  }
  ngOnInit(): void {
    this.adjustLayoutForMobile();
    this.getNavList();
    this.getnavEventList();
    this.zIndexService.headerZIndex$.subscribe((zIndex: number) => {
      this.navZIndex = zIndex;
    });

  }
  adjustLayoutForMobile() {
    if (isPlatformBrowser(this.platformId)) {
      const screenWidth = window.innerWidth;
      const leftContainer = this.el.nativeElement.querySelector('.left');
      const rightDiv = this.el.nativeElement.querySelector('.right');

      if (screenWidth > 991) {

        if (!rightDiv) {
          const rightDiv = this.renderer.createElement('div');
          this.renderer.addClass(rightDiv, 'right');


          const twoDiv = this.el.nativeElement.querySelector('.second');
          const threeDiv = this.el.nativeElement.querySelector('.third');

          this.renderer.appendChild(rightDiv, twoDiv);
          this.renderer.appendChild(rightDiv, threeDiv);


          this.renderer.appendChild(leftContainer, rightDiv);
        }
      } else {

        if (rightDiv) {

          const twoDiv = this.el.nativeElement.querySelector('.second');
          const threeDiv = this.el.nativeElement.querySelector('.third');

          this.renderer.appendChild(leftContainer, twoDiv);
          this.renderer.appendChild(leftContainer, threeDiv);


          this.renderer.removeChild(leftContainer, rightDiv);
        }
      }
    }
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
