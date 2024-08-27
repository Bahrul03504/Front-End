import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.page.html',
  styleUrls: ['./snack.page.scss'],
})
export class SnackPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToBiskuit() {
    this.router.navigate(['/categories/snack/biskuit']);
  }

  goToChips() {
    this.router.navigate(['/categories/snack/chips']);
  }

  goToCokelat() {
    this.router.navigate(['/categories/snack/cokelat']);
  }

  goToKacang() {  // Mengubah menjadi camelCase yang lebih umum
    this.router.navigate(['/categories/snack/kacang']);  // Pastikan rute ini benar
  }

  goToPermen() {
    this.router.navigate(['/categories/snack/permen']);
  }

  goToWafer() {
    this.router.navigate(['/categories/snack/wafer']);
  }
}
