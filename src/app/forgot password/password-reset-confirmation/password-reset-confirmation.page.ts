import { Component } from '@angular/core';

@Component({
  selector: 'app-password-reset-confirmation',
  templateUrl: './password-reset-confirmation.page.html',
  styleUrls: ['./password-reset-confirmation.page.scss'],
})
export class PasswordResetPage {
  password: string = '';
  confirmPassword: string = '';

  constructor() { }

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      console.error('Passwords do not match');
      // Tambahkan logika untuk menangani kesalahan kata sandi tidak cocok
      return;
    }
    
    // Tambahkan logika untuk menangani pengaturan kata sandi baru
    console.log('Password reset confirmed');
    // Misalnya, panggil API untuk memperbarui kata sandi
  }
}
