import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SusuPageRoutingModule } from './susu-routing.module';

import { SusuPage } from './susu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SusuPageRoutingModule
  ],
  declarations: [SusuPage]
})
export class SusuPageModule {}
