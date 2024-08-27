import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KopiTehPage } from './kopi-teh.page';

const routes: Routes = [
  {
    path: '',
    component: KopiTehPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KopiTehPageRoutingModule {}
