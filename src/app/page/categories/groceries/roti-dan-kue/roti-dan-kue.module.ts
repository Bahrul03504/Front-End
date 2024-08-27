import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RotiDanKuePageRoutingModule } from './roti-dan-kue-routing.module';

import { RotiDanKuePage } from './roti-dan-kue.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RotiDanKuePageRoutingModule
  ],
  declarations: [RotiDanKuePage]
})
export class RotiDanKuePageModule {}
