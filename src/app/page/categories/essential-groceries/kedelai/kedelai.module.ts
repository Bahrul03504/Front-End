import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KedelaiPageRoutingModule } from './kedelai-routing.module';

import { KedelaiPage } from './kedelai.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KedelaiPageRoutingModule
  ],
  declarations: [KedelaiPage]
})
export class KedelaiPageModule {}
