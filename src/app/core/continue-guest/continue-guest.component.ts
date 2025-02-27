import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { CustomMatCheckboxComponent } from '../../shared/genericComponents/custom-mat-checkbox/custom-mat-checkbox.component';

@Component({
  selector: 'app-continue-guest',
  standalone: true,
  imports: [MatCheckboxModule, FormsModule, CommonModule, ReactiveFormsModule,CustomMatCheckboxComponent],
  templateUrl: './continue-guest.component.html',
  styleUrl: './continue-guest.component.scss'
})
export class ContinueGuestComponent {
   @ViewChild('fullnameInput') fullnameInput!: ElementRef;
  isChecked = false;
  checked = false;
  isTermsChecked = false;
 isTermssubscribed = false;
constructor(
    private fb: FormBuilder){}
   
  guestForm: FormGroup = this.fb.group({
      firstName: ['', Validators.required],
        email: ['', Validators.required],
        relatie: ['', Validators.required],
        phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
        password: ['', Validators.required],
        confirmPassword: ['', Validators.required]
    });
    toggleTermsCheckbox(isChecked: boolean) {
      this.isTermsChecked = isChecked;
    }
    toggleTermssubscribed(isChecked: boolean){
      this.isTermssubscribed = isChecked;
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.fullnameInput.nativeElement.focus();
    }, 0); 
  }
}
