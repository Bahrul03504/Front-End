import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SodaPageRoutingModule } from './soda-routing.module';

import { SodaPage } from './soda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SodaPageRoutingModule
  ],
  declarations: [SodaPage]
})
export class SodaPageModule {}
