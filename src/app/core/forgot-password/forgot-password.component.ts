import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DefaultService } from '../../services/default.service';
import { forgotpwdModel } from '../../_models/forgotpwd.model';
import { ForgotpwdService } from '../../services/forgotpwd/forgotpwd.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [MatFormFieldModule, FormsModule, ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  email: string = "";
  forgotMailForm = this.fb.group({
    email: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private defaultService: DefaultService,
    private forgotpwd: ForgotpwdService,
    private router: Router,

  ) { }

  ngOnInit() {
    this.forgotPassword()
  }
  forgotPassword() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.email = result.email;
    })
    console.log(this.forgotMailForm.value)
  }
  onSubmit() {
    this.forgotpwd.forgotPWD((this.forgotMailForm.value as forgotpwdModel)).subscribe((result: any) => {
      this.router.navigate(['forgotpwd']);
    });
  }

}
