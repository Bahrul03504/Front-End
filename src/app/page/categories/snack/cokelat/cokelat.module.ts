import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CokelatPageRoutingModule } from './cokelat-routing.module';

import { CokelatPage } from './cokelat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CokelatPageRoutingModule
  ],
  declarations: [CokelatPage]
})
export class CokelatPageModule {}
