import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EssentialGroceriesPage } from './essential-groceries.page';

const routes: Routes = [
  {
    path: '',
    component: EssentialGroceriesPage
  },  {
    path: 'beras',
    loadChildren: () => import('./beras/beras.module').then( m => m.BerasPageModule)
  },
  {
    path: 'tepung',
    loadChildren: () => import('./tepung/tepung.module').then( m => m.TepungPageModule)
  },
  {
    path: 'gula',
    loadChildren: () => import('./gula/gula.module').then( m => m.GulaPageModule)
  },
  {
    path: 'garam',
    loadChildren: () => import('./garam/garam.module').then( m => m.GaramPageModule)
  },
  {
    path: 'minyak-goreng',
    loadChildren: () => import('./minyak-goreng/minyak-goreng.module').then( m => m.MinyakGorengPageModule)
  },
  {
    path: 'telur',
    loadChildren: () => import('./telur/telur.module').then( m => m.TelurPageModule)
  },
  {
    path: 'susu',
    loadChildren: () => import('./susu/susu.module').then( m => m.SusuPageModule)
  },
  {
    path: 'kedelai',
    loadChildren: () => import('./kedelai/kedelai.module').then( m => m.KedelaiPageModule)
  },
  {
    path: 'kopi-teh',
    loadChildren: () => import('./kopi-teh/kopi-teh.module').then( m => m.KopiTehPageModule)
  },
  {
    path: 'bumbu-dasar',
    loadChildren: () => import('./bumbu-dasar/bumbu-dasar.module').then( m => m.BumbuDasarPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EssentialGroceriesPageRoutingModule {}
