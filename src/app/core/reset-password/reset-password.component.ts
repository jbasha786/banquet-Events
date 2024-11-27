import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultService } from '../../services/default.service';
import { ResetpwdService } from '../../services/reset/resetpwd.service';
import { ActivatedRoute, Router } from '@angular/router';
import { resetpwdModel } from '../../_models/resetpwd.model';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {
  email: string = "";
  code: string = "";
  newpassword: string = "";

  resetPasswordForm = this.fb.group({
    email: ['', Validators.required],
    newpassword: ['', Validators.required],
    cPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder,
    private defaultService: DefaultService,
    private resetpwd: ResetpwdService,
    private router: Router,
    private params: ActivatedRoute
  ) { }
  ngOnInit() {
    this.resetPassword();
    this.getParams();

  }
  resetPassword() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.email = result.email;
      this.code = result.code;
      this.newpassword = result.newpassword;
    })
    console.log(this.resetPasswordForm.value)
  }
  getParams() {
    this.params.queryParams.subscribe((params: any) => {
      console.log(params)
      localStorage.setItem('code',params?.code)
    })
  }
  onSubmit() {
    this.resetpwd.resetPWD((this.resetPasswordForm.value as resetpwdModel)).subscribe((result: any) => {
      this.router.navigate(['home']);
    });
  }
}
