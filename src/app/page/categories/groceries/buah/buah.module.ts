import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BuahPageRoutingModule } from './buah-routing.module';

import { BuahPage } from './buah.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BuahPageRoutingModule
  ],
  declarations: [BuahPage]
})
export class BuahPageModule {}
