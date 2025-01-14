import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string=""
  pswd:string=""
  constructor(private route:Router ){}
  
  

  navigateToCalculater(): void {
    const localEmail = localStorage.getItem('email'); 
    const localPassword = localStorage.getItem('password'); 

    if (this.email === localEmail && this.pswd === localPassword) {
      
      alert("Login successful!");
      this.route.navigateByUrl('/bmi'); 
    } else {
      
      alert("Invalid email or password");
    }   
}
}