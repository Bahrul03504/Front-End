import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KacangPage } from './kacang.page';

const routes: Routes = [
  {
    path: '',
    component: KacangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KacangPageRoutingModule {}
