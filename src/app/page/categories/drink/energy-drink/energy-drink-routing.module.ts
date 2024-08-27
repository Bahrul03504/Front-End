import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EnergyDrinkPage } from './energy-drink.page';

const routes: Routes = [
  {
    path: '',
    component: EnergyDrinkPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EnergyDrinkPageRoutingModule {}
