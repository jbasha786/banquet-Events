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
      'x-auth-token': "{A8A50D01-7597-4243-9B3F-CE4EE2323C4B}" 
    })
    return this.http.post(url, body ,{headers});

  }
  DELETE() { }


}
