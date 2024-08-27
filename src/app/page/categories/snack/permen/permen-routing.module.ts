import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermenPage } from './permen.page';

const routes: Routes = [
  {
    path: '',
    component: PermenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PermenPageRoutingModule {}
