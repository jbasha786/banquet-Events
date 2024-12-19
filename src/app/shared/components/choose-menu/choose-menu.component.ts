import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MenuComponent } from '../menu/menu.component';
import { ZindexService } from '../../../services/zindex.service';
import { ListOfHallsComponent } from '../../../booking/list-of-halls/list-of-halls.component';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-choose-menu',
  standalone: true,
  imports: [MenuComponent,MatIconModule],
  templateUrl: './choose-menu.component.html',
  styleUrl: './choose-menu.component.scss'
})
export class ChooseMenuComponent {

constructor(private zIndexService: ZindexService,
  private dialog: MatDialog,
  public dialogRef: MatDialogRef<ListOfHallsComponent>

){}

  selectMenu(){
    this.zIndexService.setHeaderZIndex(1000);
    const dialogRef =  this.dialog.open(MenuComponent, {
      width: '700px',
      height: '80vh',
      panelClass: 'fixed-dialog',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.zIndexService.setHeaderZIndex(1030);
    });
  }

  close() {
    this.dialogRef.close();
  }
}
