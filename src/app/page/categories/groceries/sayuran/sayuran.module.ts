import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SayuranPageRoutingModule } from './sayuran-routing.module';

import { SayuranPage } from './sayuran.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SayuranPageRoutingModule
  ],
  declarations: [SayuranPage]
})
export class SayuranPageModule {}
