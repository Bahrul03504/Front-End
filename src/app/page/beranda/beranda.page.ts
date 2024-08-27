import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../services/product.service';  // Impor harus benar

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

  goToGroceries() {
    console.log('Navigating to groceries');
    this.router.navigate(['/categories/groceries']);
  }

  goToSnack() {
    console.log('Navigating to snack');
    this.router.navigate(['/categories/snack']);
  }

  goToDrink() {
    console.log('Navigating to drink');
    this.router.navigate(['/categories/drink']);
  }

  goToEssentialGroceries() {
    console.log('Navigating to essential groceries');
    this.router.navigate(['/categories/essential-groceries']);
  }
}
