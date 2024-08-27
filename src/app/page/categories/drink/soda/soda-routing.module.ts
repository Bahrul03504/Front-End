import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SodaPage } from './soda.page';

const routes: Routes = [
  {
    path: '',
    component: SodaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SodaPageRoutingModule {}
