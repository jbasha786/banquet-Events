import {
  Component,
  Input,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  ChangeDetectorRef,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { DefaultService } from '../../../services/default.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../../../core/login/login.component';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ZindexService } from '../../../services/zindex.service';
import { ButtonComponent } from '../../genericComponents/button/button.component';
import { headerFlowSelector } from '../../../_store/selectors/header.selector';
import { headerFlowModel } from '../../_models/headerFlow.model';
import { Store } from '@ngrx/store';
import * as headerFlowActions from "../../../_store/actions/header.action";
import * as headerLinkActions from "../../../_store/actions/headerLinks.actions";
import { headerLinkSelector } from '../../../_store/selectors/headerLinks.selector';
import { headerLinkModel } from '../../_models/headerLinks.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    LoginComponent,
    RouterLink,
    MatMenuModule,
    MatButtonModule,
    DialogueComponent,
    CommonModule,
    ButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  hoverSrc: string | undefined;
  navZIndex: number = 1030;
  @Input() headerInfo: any;
  navList: headerLinkModel[] = [];
  navEvent_Items: headerFlowModel[] = [];
  openpopup: boolean = false;
  hoveredItem: headerLinkModel | null = null;
  specialIndex = 2;
  private previousWidths = new Map<number, string>();
  constructor(
    private router: Router,
    private store: Store<any>,
    private defaultService: DefaultService,
    private overlayContainer: OverlayContainer,
    private dialog: MatDialog,
    private zIndexService: ZindexService,
    private renderer: Renderer2,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.adjustLayoutForMobile();
  }
  ngOnInit(): void {
    this.adjustLayoutForMobile();
    this.getNavList();
    this.fetchheaderFlowInfoStoreData();
    this.fetchHeaderLinkInfoStoreData();
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
    if (!item) return '28px';
    const screenWidth =
      typeof window !== 'undefined' ? window.innerWidth : 1920;

    let defaultSize = '28px';
    if (screenWidth >= 2560) {
      defaultSize = '32px';
    } else if (screenWidth >= 1920) {
      defaultSize = '30px';
    }

    let finalSize = defaultSize;

    if (index === 2) {
      const sizeMap: Record<string, string> = {
        '32px': '29px',
        '30px': '27px',
        '28px': '25px',
      };
      finalSize = sizeMap[defaultSize] || defaultSize;
    }

    if (this.previousWidths.get(index) !== finalSize) {
      this.previousWidths.set(index, finalSize);
    }

    return finalSize;
  }

  getNavList() {
    this.defaultService.getJSON().subscribe((result) => {
      this.store.dispatch(headerLinkActions.setHeaderLinks({ headerLink: result?.navList }))
      this.store.dispatch(headerFlowActions.setHeaderFlow({ headerFlow: result?.navEvent_Items }));
    });
  }
  public fetchheaderFlowInfoStoreData() {
    this.store.select(headerFlowSelector).subscribe((data: headerFlowModel[]) => {
      this.navEvent_Items = data;
    })
  }
  public fetchHeaderLinkInfoStoreData() {
    this.store.select(headerLinkSelector).subscribe((data: headerLinkModel[]) => {
      this.navList = data;
    })
  }


  goTo(link: any) {
    this.router.navigate([link]);
  }

  handleButtonClick() {
    this.router.navigate(['liveEvents']);
  }

  onMouseEnter(item: headerLinkModel): void {
    this.hoveredItem = item;
  }

  onMouseLeave(): void {
    this.hoveredItem = null;
  }
}
