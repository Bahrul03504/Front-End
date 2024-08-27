import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TepungPageRoutingModule } from './tepung-routing.module';

import { TepungPage } from './tepung.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TepungPageRoutingModule
  ],
  declarations: [TepungPage]
})
export class TepungPageModule {}
