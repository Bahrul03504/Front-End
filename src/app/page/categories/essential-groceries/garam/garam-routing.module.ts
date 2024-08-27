import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GaramPage } from './garam.page';

const routes: Routes = [
  {
    path: '',
    component: GaramPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GaramPageRoutingModule {}
