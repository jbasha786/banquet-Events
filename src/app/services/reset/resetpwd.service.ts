import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { env } from '../../../environments/environment';
import { resetpwdModel } from '../../_models/resetpwd.model';

@Injectable({
  providedIn: 'root'
})
export class ResetpwdService {

  constructor(private apiService: ApiService) { }
  resetPWD(body: resetpwdModel){
    const url = `${env.apiURL}guest/resetpassword`;
    return this.apiService.POST(url, body);
  }
}
