import { Injectable } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowService {
  onResize(): Observable<Event> {
    return fromEvent(window, 'resize');
  }

  constructor() { }
}
