import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GulaPageRoutingModule } from './gula-routing.module';

import { GulaPage } from './gula.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GulaPageRoutingModule
  ],
  declarations: [GulaPage]
})
export class GulaPageModule {}
