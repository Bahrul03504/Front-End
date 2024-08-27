import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BumbuDasarPageRoutingModule } from './bumbu-dasar-routing.module';

import { BumbuDasarPage } from './bumbu-dasar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BumbuDasarPageRoutingModule
  ],
  declarations: [BumbuDasarPage]
})
export class BumbuDasarPageModule {}
