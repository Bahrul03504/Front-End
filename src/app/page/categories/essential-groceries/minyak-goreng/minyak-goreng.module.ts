import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MinyakGorengPageRoutingModule } from './minyak-goreng-routing.module';

import { MinyakGorengPage } from './minyak-goreng.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MinyakGorengPageRoutingModule
  ],
  declarations: [MinyakGorengPage]
})
export class MinyakGorengPageModule {}
