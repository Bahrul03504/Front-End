import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.page.html',
  styleUrls: ['./drink.page.scss'],
})
export class DrinkPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goToMineralWater() {
    this.router.navigate(['/categories/drink/mineral-water']);
  }

  goToSoda() {
    this.router.navigate(['/categories/drink/soda']);
  }

  goToCoffee() {
    this.router.navigate(['/categories/drink/coffee']);
  }

  goToTea() {
    this.router.navigate(['/categories/drink/tea']);
  }

  goToMilk() {
    this.router.navigate(['/categories/drink/milk']);
  }

  goToEnergyDrink() {
    this.router.navigate(['/categories/drink/energy-drink']);
  }
}
