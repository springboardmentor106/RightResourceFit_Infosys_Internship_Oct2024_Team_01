import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
         {path: 'login', component: LoginComponent}, 
         {path: 'signUp', component: SignUpComponent},
         {path:'home',component: HomeComponent}
    
];
