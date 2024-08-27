import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananSiapSajiPageRoutingModule } from './makanan-siap-saji-routing.module';

import { MakananSiapSajiPage } from './makanan-siap-saji.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananSiapSajiPageRoutingModule
  ],
  declarations: [MakananSiapSajiPage]
})
export class MakananSiapSajiPageModule {}
