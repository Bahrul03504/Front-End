import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticatedStatus: boolean = false; // Status autentikasi pengguna

  constructor(private router: Router) {}

  // Fungsi untuk login pengguna
  login(username: string, password: string): boolean {
    // Ini adalah logika sederhana untuk demo; logika login sebenarnya harus menggunakan API server
    if (username === 'user' && password === 'password') {
      this.isAuthenticatedStatus = true;
      return true;
    } else {
      return false;
    }
  }

  // Fungsi untuk logout pengguna
  logout(): void {
    this.isAuthenticatedStatus = false;
    this.router.navigate(['/sign-in']); // Mengarahkan pengguna ke halaman sign-in setelah logout
  }

  // Fungsi untuk mengecek apakah pengguna sudah login
  isAuthenticated(): boolean {
    return this.isAuthenticatedStatus;
  }
}
