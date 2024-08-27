import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TelurPage } from './telur.page';

const routes: Routes = [
  {
    path: '',
    component: TelurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelurPageRoutingModule {}
