import { Injectable, Type, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class CustomDialogService {
  private dialog = inject(MatDialog);

  openDialog<T>(component: Type<T>, config?: any) {
    return this.dialog.open(component, {
      backdropClass: 'custom-dialog-backdrop',
      panelClass: config.panelClass,
      width: config?.width || "550px",
      disableClose: config?.disableClose ?? true,
      data: config?.data || {}
    });
  }
  closeAllDialogs() {
    this.dialog.closeAll();
  }
}
