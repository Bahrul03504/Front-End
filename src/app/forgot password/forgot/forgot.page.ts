import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Pastikan Router diimport di sini

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {
  email: string = '';

  constructor(private router: Router) { }

  resetPassword() {
    if (this.email) {
      console.log('Reset password link sent to', this.email);
      this.router.navigate(['/verify-email']);
    } else {
      console.log('Please enter your email.');
    }
  }
}
