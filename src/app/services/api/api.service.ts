import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  Get() { }
  PUT() { }
  POST(url: string, body: any) {
    const headers = new HttpHeaders({ 
      'Content-Type': 'application/json', 
      'x-auth-token': "{B8F85C2A-F34D-4525-AAF9-0A3D828FD270}" 
    })
    return this.http.post(url, body ,{headers});

  }
  DELETE() { }


}
