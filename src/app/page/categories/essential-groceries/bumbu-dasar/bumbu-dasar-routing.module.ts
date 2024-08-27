import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BumbuDasarPage } from './bumbu-dasar.page';

const routes: Routes = [
  {
    path: '',
    component: BumbuDasarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BumbuDasarPageRoutingModule {}
