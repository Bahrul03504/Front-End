import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnackPage } from './snack.page';

const routes: Routes = [
  {
    path: '',
    component: SnackPage
  },  {
    path: 'biskuit',
    loadChildren: () => import('./biskuit/biskuit.module').then( m => m.BiskuitPageModule)
  },
  {
    path: 'chips',
    loadChildren: () => import('./chips/chips.module').then( m => m.ChipsPageModule)
  },
  {
    path: 'cokelat',
    loadChildren: () => import('./cokelat/cokelat.module').then( m => m.CokelatPageModule)
  },
  {
    path: 'kacang',
    loadChildren: () => import('./kacang/kacang.module').then( m => m.KacangPageModule)
  },
  {
    path: 'permen',
    loadChildren: () => import('./permen/permen.module').then( m => m.PermenPageModule)
  },
  {
    path: 'wafer',
    loadChildren: () => import('./wafer/wafer.module').then( m => m.WaferPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SnackPageRoutingModule {}
