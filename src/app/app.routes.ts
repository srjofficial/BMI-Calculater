import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { BmiComponent } from './bmi/bmi.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {
        path:'',component:LandingPageComponent
    },
    {
        path:'register',component:RegisterComponent
    },
    {
        path:'bmi',component:BmiComponent
    },
    { 
        path: 'login', component: LoginComponent 
    },
    { 
        path: 'register', component: RegisterComponent 
    }
];
