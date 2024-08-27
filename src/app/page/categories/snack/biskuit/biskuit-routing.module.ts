import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BiskuitPage } from './biskuit.page';

const routes: Routes = [
  {
    path: '',
    component: BiskuitPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BiskuitPageRoutingModule {}
