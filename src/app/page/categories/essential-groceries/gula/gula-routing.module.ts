import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GulaPage } from './gula.page';

const routes: Routes = [
  {
    path: '',
    component: GulaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GulaPageRoutingModule {}
