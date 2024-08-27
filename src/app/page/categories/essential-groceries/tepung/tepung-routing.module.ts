import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TepungPage } from './tepung.page';

const routes: Routes = [
  {
    path: '',
    component: TepungPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TepungPageRoutingModule {}
