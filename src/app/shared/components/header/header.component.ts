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
import { ButtonComponent } from '../../genericComponents/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LoginComponent,
    RouterLink,
    MatMenuModule,
    MatButtonModule,
    DialogueComponent,
    CommonModule,
    ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  hoverSrc: string | undefined;
  navZIndex: number = 1030;
  @Input() headerInfo: any;
  navList: headerModel[] = [];
  navEvent_Items: headerModel[] = [];
  openpopup: boolean = false;
  hoveredItem: headerModel | null = null;
  specialIndex = 2;

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
  getImageWidth(index: number, item: any): string {
    if (!item) {
      return '28px'; 
    }
  
    const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1920;
  
   
    let defaultSize = '28px';
    if (screenWidth >= 2560) {
      defaultSize = '32px';
    } else if (screenWidth >= 1920) {
      defaultSize = '30px';
    } else if (screenWidth >= 992) {
      defaultSize = '28px';
    }
  
    
    if (index === 2) {
      if (defaultSize === '34px') return '31px';
      if (defaultSize === '32px') return '29px';
      if (defaultSize === '30px') return '27px';
      if (defaultSize === '28px') return '25px';
    }
  
    return defaultSize; 
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

  handleButtonClick() {
    this.router.navigate(['liveEvents'])
  }
   
   onMouseEnter(item: headerModel): void {
    this.hoveredItem = item; 
  }

  
  onMouseLeave(): void {
    this.hoveredItem = null;  
  }
  
}
