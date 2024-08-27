import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-groceries',
  templateUrl: './groceries.page.html',
  styleUrls: ['./groceries.page.scss'],
})
export class GroceriesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToBuah() {
    this.router.navigate(['/categories/groceries/buah']);
  }

  goToSayuran() {
    this.router.navigate(['/categories/groceries/sayuran']);
  }

  goToDagingDanIkan() {
    this.router.navigate(['/categories/groceries/daging-dan-ikan']);
  }

  goToRotiDanKue() {
    this.router.navigate(['/categories/groceries/roti-dan-kue']);
  }

  goToMakananKalengDanKemasan() {
    this.router.navigate(['/categories/groceries/makanan-kaleng-dan-kemasan']);
  }

  goToBumbuDanRempahRempah() {
    this.router.navigate(['/categories/groceries/bumbu-dan-rempah-rempah']);
  }

  goToMakananBeku() {
    this.router.navigate(['/categories/groceries/makanan-beku']);
  }

  goToMakananSiapSaji() {
    this.router.navigate(['/categories/groceries/makanan-siap-saji']);
  }

  goToProdukPembersih() {
    this.router.navigate(['/categories/groceries/produk-pembersih']);
  }
}
