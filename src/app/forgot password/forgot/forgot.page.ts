import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage {
  email!: string;

  constructor(private router: Router) { }

  resetPassword() {
    // Here you would call your backend service to initiate the password reset
    console.log('Reset password link sent to', this.email);
    this.router.navigate(['/verify-email']);
  }
}
