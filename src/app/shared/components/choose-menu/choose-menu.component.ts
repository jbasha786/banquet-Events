import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';
import { ZindexService } from '../../../services/zindex.service';
import { MatIconModule } from '@angular/material/icon';
import { CustomDialogService } from '../../../services/custom-dialog.service';


@Component({
  selector: 'app-choose-menu',
  standalone: true,
  imports: [MenuComponent,MatIconModule],
  templateUrl: './choose-menu.component.html',
  styleUrl: './choose-menu.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ChooseMenuComponent {

constructor(private zIndexService: ZindexService,
  private dialog: MatDialog,
  private customDialogService: CustomDialogService,
  public dialogRef: MatDialogRef<ChooseMenuComponent>

){}

  selectMenu(){
    this.zIndexService.setHeaderZIndex(1000);
    const dialogRef = this.customDialogService.openDialog(MenuComponent, {
      panelClass: 'fixed-dialog',
      width: '60%',
      backdropClass: 'custom-backdrop-nested',
      disableClose: false
    });

    dialogRef.afterClosed().subscribe(() => {
      this.zIndexService.setHeaderZIndex(1030);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
