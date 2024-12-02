import { Component, Input, OnInit, ElementRef, Renderer2, HostListener } from '@angular/core';
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
    private dialog: MatDialog,
    private renderer: Renderer2, private el: ElementRef
  ) { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustLayoutForMobile();
    this.toggleThickLines();
  }
  ngOnInit(): void {
    this.adjustLayoutForMobile();
    this.getNavList();
    this.getnavEventList();
    this.toggleThickLines();
  }
  adjustLayoutForMobile() {
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
  toggleThickLines() {
    const topLine = document.querySelector('.thik_line:first-of-type') as HTMLElement;
    const bottomLine = document.querySelector('.thik_line:last-of-type') as HTMLElement;

    if (window.innerWidth >= 992) {
      if (topLine) topLine.style.display = '';
      if (bottomLine) bottomLine.style.display = 'none';
    } else {
      if (topLine) topLine.style.display = 'none';
      if (bottomLine) bottomLine.style.display = '';
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
  preventCloseOnClickOut() {
    this.overlayContainer.getContainerElement().classList.add('disable-backdrop-click');
  }

  allowCloseOnClickOut() {
    this.overlayContainer.getContainerElement().classList.remove('disable-backdrop-click');
  }

  goToHome() {
    this.router.navigate(['']);
  }

  expression(link: any) {
    if (link === 'mybooking') {
      this.router.navigate([link])
    }
  }
}
