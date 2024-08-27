import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BumbuDanRempahRempahPage } from './bumbu-dan-rempah-rempah.page';

const routes: Routes = [
  {
    path: '',
    component: BumbuDanRempahRempahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BumbuDanRempahRempahPageRoutingModule {}
