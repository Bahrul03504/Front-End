import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  onSubmit() {
    // Handle sign-in logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);

    // After successful sign-in, navigate to the beranda page
    this.router.navigate(['/beranda']);
  }

  signInWithGoogle() {
    // Handle Google sign-in logic here
    console.log('Sign in with Google');
  }
}
