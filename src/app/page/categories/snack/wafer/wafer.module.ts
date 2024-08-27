import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WaferPageRoutingModule } from './wafer-routing.module';

import { WaferPage } from './wafer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WaferPageRoutingModule
  ],
  declarations: [WaferPage]
})
export class WaferPageModule {}
