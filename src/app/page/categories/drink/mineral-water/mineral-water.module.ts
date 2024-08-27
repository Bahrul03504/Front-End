import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MineralWaterPageRoutingModule } from './mineral-water-routing.module';

import { MineralWaterPage } from './mineral-water.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MineralWaterPageRoutingModule
  ],
  declarations: [MineralWaterPage]
})
export class MineralWaterPageModule {}
