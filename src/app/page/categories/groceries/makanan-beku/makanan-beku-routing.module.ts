import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananBekuPage } from './makanan-beku.page';

const routes: Routes = [
  {
    path: '',
    component: MakananBekuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananBekuPageRoutingModule {}
