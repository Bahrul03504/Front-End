import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DrinkPage } from './drink.page';

const routes: Routes = [
  {
    path: '',
    component: DrinkPage
  },  {
    path: 'mineral-water',
    loadChildren: () => import('./mineral-water/mineral-water.module').then( m => m.MineralWaterPageModule)
  },
  {
    path: 'soda',
    loadChildren: () => import('./soda/soda.module').then( m => m.SodaPageModule)
  },
  {
    path: 'coffee',
    loadChildren: () => import('./coffee/coffee.module').then( m => m.CoffeePageModule)
  },
  {
    path: 'tea',
    loadChildren: () => import('./tea/tea.module').then( m => m.TeaPageModule)
  },
  {
    path: 'milk',
    loadChildren: () => import('./milk/milk.module').then( m => m.MilkPageModule)
  },
  {
    path: 'energy-drink',
    loadChildren: () => import('./energy-drink/energy-drink.module').then( m => m.EnergyDrinkPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DrinkPageRoutingModule {}
