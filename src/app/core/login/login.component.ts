import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DefaultService } from '../../services/default.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login/login.service';
import { loginModel } from '../../_models/login.model';
import { ButtonComponent } from '../../shared/genericComponents/button/button.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, RouterModule,ButtonComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  isPasswordVisible = false;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  })
  constructor(
    private defaultService: DefaultService,
    private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService,
  ) {
  }
  ngOnInit(): void {
    this.getusername();
    this.getpassword();
  }
  togglePasswordVisibility(): void {
    this.isPasswordVisible = !this.isPasswordVisible;
  }
  getusername() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.username = result.username;
    })
  }

  getpassword() {
    this.defaultService.getJSON().subscribe((result: any) => {
      this.password = result.password;
    })
  }

  // Save the Login Information
  onSubmit() {
    this.loginService.userLogin((this.loginForm.value as loginModel)).subscribe((result: any) => {
      this.router.navigate(['home']);
    });
  }

  signUp() {
    this.router.navigate(['signUp']);
  }

}
