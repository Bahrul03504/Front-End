import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProdukPembersihPage } from './produk-pembersih.page';

const routes: Routes = [
  {
    path: '',
    component: ProdukPembersihPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProdukPembersihPageRoutingModule {}
