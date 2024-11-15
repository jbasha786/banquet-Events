import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { RegisterModel } from '../../_models/register.model';
import { env } from '../../../environments/environment';
import { loginModel } from '../../_models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService: ApiService) { }

  userLogin(body: loginModel) {
    const url = `${env.apiURL}/guest/login`;
    return this.apiService.POST(url, body);
  }
}
