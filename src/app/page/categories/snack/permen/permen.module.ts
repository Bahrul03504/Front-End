import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PermenPageRoutingModule } from './permen-routing.module';

import { PermenPage } from './permen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PermenPageRoutingModule
  ],
  declarations: [PermenPage]
})
export class PermenPageModule {}
