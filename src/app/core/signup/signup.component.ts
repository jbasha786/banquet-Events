import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { SignUpService } from '../../services/signUp/sign-up.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss'
})
export class SignupComponent {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private signUpService: SignUpService) { }

  registrationForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      fullName: ['', Validators.required],
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
  });

  returnToLogin() {
    this.router.navigate(['login']);
  }

  register() {
    this.signUpService.userRegistration(this.registrationForm.value).subscribe((result: any) => {
      this.router.navigate(['login']);
    });
  }

}
