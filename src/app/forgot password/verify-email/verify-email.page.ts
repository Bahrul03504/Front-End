import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.page.html',
  styleUrls: ['./verify-email.page.scss'],
})
export class VerifyEmailPage {
  email: string = 'email@gmail.com';
  code!: string;

  constructor(private router: Router) { }

  verifyCode() {
    // Here you would call your backend service to verify the code
    console.log('Code verified:', this.code);
    this.router.navigate(['/password-reset']);
  }
}
