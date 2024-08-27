import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SusuPage } from './susu.page';

const routes: Routes = [
  {
    path: '',
    component: SusuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SusuPageRoutingModule {}
