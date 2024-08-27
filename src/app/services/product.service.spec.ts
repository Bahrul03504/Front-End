// beranda.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from './product.service'; // Pastikan jalur ini benar

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
  rating: number = 4;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    // Logika atau inisialisasi lainnya bisa ditambahkan di sini jika diperlukan
  }

  // Metode navigasi ke halaman lain
  goToGroceries() {
    console.log('Navigating to groceries');
    this.router.navigate(['/categories/groceries']);
  }
}
