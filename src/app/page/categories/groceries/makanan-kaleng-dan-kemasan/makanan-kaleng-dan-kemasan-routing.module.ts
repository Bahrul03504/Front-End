import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MakananKalengDanKemasanPage } from './makanan-kaleng-dan-kemasan.page';

const routes: Routes = [
  {
    path: '',
    component: MakananKalengDanKemasanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MakananKalengDanKemasanPageRoutingModule {}
