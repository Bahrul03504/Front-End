import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BumbuDanRempahRempahPageRoutingModule } from './bumbu-dan-rempah-rempah-routing.module';

import { BumbuDanRempahRempahPage } from './bumbu-dan-rempah-rempah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BumbuDanRempahRempahPageRoutingModule
  ],
  declarations: [BumbuDanRempahRempahPage]
})
export class BumbuDanRempahRempahPageModule {}
