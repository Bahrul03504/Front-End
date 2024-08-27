import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BerasPageRoutingModule } from './beras-routing.module';

import { BerasPage } from './beras.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BerasPageRoutingModule
  ],
  declarations: [BerasPage]
})
export class BerasPageModule {}
