import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-essential-groceries',
  templateUrl: './essential-groceries.page.html',
  styleUrls: ['./essential-groceries.page.scss'],
})
export class EssentialGroceriesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToBeras() {
    this.router.navigate(['/categories/essential-groceries/beras']);
  }

  goToTepung() {
    this.router.navigate(['/categories/essential-groceries/tepung']);
  }

  goToGula() {
    this.router.navigate(['/categories/essential-groceries/gula']);
  }

  goToGaram() {
    this.router.navigate(['/categories/essential-groceries/garam']);
  }

  goToMinyakGoreng() {
    this.router.navigate(['/categories/essential-groceries/minyak-goreng']);
  }

  goToTelur() {
    this.router.navigate(['/categories/essential-groceries/telur']);
  }

  goToSusu() {
    this.router.navigate(['/categories/essential-groceries/susu']);
  }

  goToKedelai() {
    this.router.navigate(['/categories/essential-groceries/kedelai']);
  }

  goToKopiTeh() {
    this.router.navigate(['/categories/essential-groceries/kopi-teh']);
  }

  goToBumbuDasar() {
    this.router.navigate(['/categories/essential-groceries/bumbu-dasar']);
  }
}
