import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HallService {

  constructor() { }

  private hallDetailVisibleSource = new BehaviorSubject<boolean>(false);
  hallDetailVisible$ = this.hallDetailVisibleSource.asObservable();

  toggleHallDetailVisibility(isVisible: boolean) {
    this.hallDetailVisibleSource.next(isVisible);
  }
}
