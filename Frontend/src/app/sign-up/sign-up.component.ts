
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  imports: [],
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
    user = {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    };

    get passwordMismatch() {
        return this.user.password !== this.user.confirmPassword && this.user.confirmPassword.length > 0;
    }

    onSubmit() {
        if (!this.passwordMismatch && this.user.name && this.user.email && this.user.password) {
            console.log('Form Submitted', this.user);
        }
    }
}