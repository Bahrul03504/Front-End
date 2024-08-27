import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DagingDanIkanPage } from './daging-dan-ikan.page';

const routes: Routes = [
  {
    path: '',
    component: DagingDanIkanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DagingDanIkanPageRoutingModule {}
