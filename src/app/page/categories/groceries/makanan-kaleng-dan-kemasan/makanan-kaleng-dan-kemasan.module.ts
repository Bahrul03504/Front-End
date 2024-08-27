import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananKalengDanKemasanPageRoutingModule } from './makanan-kaleng-dan-kemasan-routing.module';

import { MakananKalengDanKemasanPage } from './makanan-kaleng-dan-kemasan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananKalengDanKemasanPageRoutingModule
  ],
  declarations: [MakananKalengDanKemasanPage]
})
export class MakananKalengDanKemasanPageModule {}
