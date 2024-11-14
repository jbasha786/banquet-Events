import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { prepareRegisterRequest, RegisterModel } from '../../_models/register.model';
import { env } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private apiService: ApiService) { }

  userRegistration(reqBody: RegisterModel) {
    const requestBody = prepareRegisterRequest(reqBody);
    const url = `${env.apiURL}guest/register`
    return this.apiService.POST(url, requestBody);
  }
}
