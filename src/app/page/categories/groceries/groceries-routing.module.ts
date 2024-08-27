import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceriesPage } from './groceries.page';

const routes: Routes = [
  {
    path: '',
    component: GroceriesPage
  },  {
    path: 'buah',
    loadChildren: () => import('./buah/buah.module').then( m => m.BuahPageModule)
  },
  {
    path: 'sayuran',
    loadChildren: () => import('./sayuran/sayuran.module').then( m => m.SayuranPageModule)
  },
  {
    path: 'daging-dan-ikan',
    loadChildren: () => import('./daging-dan-ikan/daging-dan-ikan.module').then( m => m.DagingDanIkanPageModule)
  },
  {
    path: 'roti-dan-kue',
    loadChildren: () => import('./roti-dan-kue/roti-dan-kue.module').then( m => m.RotiDanKuePageModule)
  },
  {
    path: 'makanan-kaleng-dan-kemasan',
    loadChildren: () => import('./makanan-kaleng-dan-kemasan/makanan-kaleng-dan-kemasan.module').then( m => m.MakananKalengDanKemasanPageModule)
  },
  {
    path: 'bumbu-dan-rempah-rempah',
    loadChildren: () => import('./bumbu-dan-rempah-rempah/bumbu-dan-rempah-rempah.module').then( m => m.BumbuDanRempahRempahPageModule)
  },
  {
    path: 'makanan-beku',
    loadChildren: () => import('./makanan-beku/makanan-beku.module').then( m => m.MakananBekuPageModule)
  },
  {
    path: 'makanan-siap-saji',
    loadChildren: () => import('./makanan-siap-saji/makanan-siap-saji.module').then( m => m.MakananSiapSajiPageModule)
  },
  {
    path: 'produk-pembersih',
    loadChildren: () => import('./produk-pembersih/produk-pembersih.module').then( m => m.ProdukPembersihPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroceriesPageRoutingModule {}
