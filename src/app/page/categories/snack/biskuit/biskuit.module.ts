import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BiskuitPageRoutingModule } from './biskuit-routing.module';

import { BiskuitPage } from './biskuit.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BiskuitPageRoutingModule
  ],
  declarations: [BiskuitPage]
})
export class BiskuitPageModule {}
