import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BerasPage } from './beras.page';

const routes: Routes = [
  {
    path: '',
    component: BerasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BerasPageRoutingModule {}
