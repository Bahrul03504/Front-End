import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananSiapSajiPage } from './makanan-siap-saji.page';

const routes: Routes = [
  {
    path: '',
    component: MakananSiapSajiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananSiapSajiPageRoutingModule {}
