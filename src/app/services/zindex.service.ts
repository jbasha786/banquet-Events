import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZindexService {

  constructor() { }
  private headerZIndex = new BehaviorSubject<number>(1030); // z-index for the header(1030 which is in header)
  headerZIndex$ = this.headerZIndex.asObservable();

  setHeaderZIndex(zIndex: number): void {
    this.headerZIndex.next(zIndex);
  }
}
