import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GaramPageRoutingModule } from './garam-routing.module';

import { GaramPage } from './garam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GaramPageRoutingModule
  ],
  declarations: [GaramPage]
})
export class GaramPageModule {}
