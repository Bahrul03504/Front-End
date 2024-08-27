import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MinyakGorengPage } from './minyak-goreng.page';

const routes: Routes = [
  {
    path: '',
    component: MinyakGorengPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MinyakGorengPageRoutingModule {}
