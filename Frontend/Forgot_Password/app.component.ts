import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './index.html',
  styleUrls: ['./global_styles.css']
})
export class AppComponent {
  email: string = '';

  sendResetLink() {
    if (this.email) {
      alert(A reset link has been sent to ${this.email});
    } else {
      alert('Please enter a valid email address.');
    }
  }
}
