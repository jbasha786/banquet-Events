import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss'
})
export class ResetPasswordComponent {

  resetPasswordForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    cPassword: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  resetPassword() {
    console.log(this.resetPasswordForm.value)
  }
}
