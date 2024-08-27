import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WaferPage } from './wafer.page';

const routes: Routes = [
  {
    path: '',
    component: WaferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WaferPageRoutingModule {}
