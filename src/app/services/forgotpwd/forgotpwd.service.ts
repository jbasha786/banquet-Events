import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { forgotpwdModel } from '../../_models/forgotpwd.model';
import { env } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgotpwdService {

  constructor(private apiService: ApiService,
    private HttpClient: HttpClient
  ) { }

  forgotPWD(body: forgotpwdModel) {
    const url = `${env.apiURL}guest/forgotpassword`;
    return this.apiService.POST(url, body);
  }
}
