import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KacangPageRoutingModule } from './kacang-routing.module';

import { KacangPage } from './kacang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KacangPageRoutingModule
  ],
  declarations: [KacangPage]
})
export class KacangPageModule {}
