import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BuahPage } from './buah.page';

const routes: Routes = [
  {
    path: '',
    component: BuahPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BuahPageRoutingModule {}
