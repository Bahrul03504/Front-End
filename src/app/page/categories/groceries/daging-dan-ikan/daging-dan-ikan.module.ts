import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DagingDanIkanPageRoutingModule } from './daging-dan-ikan-routing.module';

import { DagingDanIkanPage } from './daging-dan-ikan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DagingDanIkanPageRoutingModule
  ],
  declarations: [DagingDanIkanPage]
})
export class DagingDanIkanPageModule {}
