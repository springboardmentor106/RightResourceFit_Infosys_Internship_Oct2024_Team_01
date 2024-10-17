import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { RecruiterComponent } from './recruiter/recruiter.component';
import { LatestJobsComponent } from './latest-jobs/latest-jobs.component';

export const routes: Routes = [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
         {path: 'login', component: LoginComponent}, 
         {path: 'signUp', component: SignUpComponent},
         {path: 'home', component: HomeComponent},
         {path: 'aboutUs', component: AboutComponent},
         {path: 'recruiter', component: RecruiterComponent},
         {path: 'latestJobs', component: LatestJobsComponent}
    
];
