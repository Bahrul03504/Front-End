import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotiDanKuePage } from './roti-dan-kue.page';

const routes: Routes = [
  {
    path: '',
    component: RotiDanKuePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RotiDanKuePageRoutingModule {}
