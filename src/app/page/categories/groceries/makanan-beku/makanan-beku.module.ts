import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MakananBekuPageRoutingModule } from './makanan-beku-routing.module';

import { MakananBekuPage } from './makanan-beku.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MakananBekuPageRoutingModule
  ],
  declarations: [MakananBekuPage]
})
export class MakananBekuPageModule {}
