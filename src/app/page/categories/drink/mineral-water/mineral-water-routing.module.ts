import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MineralWaterPage } from './mineral-water.page';

const routes: Routes = [
  {
    path: '',
    component: MineralWaterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MineralWaterPageRoutingModule {}
