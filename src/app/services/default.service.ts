import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  constructor(private http: HttpClient) { }

  public getJSON(): Observable<any> {
    const path = "/assets/InitialData/InitialScreen.json";
    return this.http.get<any>(path);
  }
}
