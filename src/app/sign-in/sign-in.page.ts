import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  username!: string;
  password!: string;

  constructor() {}

  onSubmit() {
    // Handle sign-in logic here
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Navigate to the home page or another page after successful sign-in
  }

  signInWithGoogle() {
    // Handle Google sign-in logic here
    console.log('Sign in with Google');
  }
}
