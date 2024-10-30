import { Component, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DefaultService } from '../services/default.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  username: string = "";
  password: string = "";
constructor( 
  private defaultService: DefaultService
){
}
ngOnInit(): void {
  this.getusername();
  this.getpassword();
}
getusername(){
  this.defaultService.getJSON().subscribe(result => {
    console.log(result);
    this.username = result.username;
  })
}
getpassword(){
  this.defaultService.getJSON().subscribe(result => {
    console.log(result);
    this.password = result.password;
  })
}
onSubmit(){
}

}
