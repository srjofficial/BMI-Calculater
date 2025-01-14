import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email:string=""
  pswd:string=""
    constructor(private route:Router ){}
  
    navigateToRegister() {
      if(this.email&&this.pswd){
        alert("register success")
        localStorage.setItem('email', this.email);
        localStorage.setItem('password', this.pswd);
        this.route.navigateByUrl('login')
      }
      else{
        alert("invalid password or email")
      }
      
  }
}
