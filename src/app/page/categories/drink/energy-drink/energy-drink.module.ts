import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnergyDrinkPageRoutingModule } from './energy-drink-routing.module';

import { EnergyDrinkPage } from './energy-drink.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnergyDrinkPageRoutingModule
  ],
  declarations: [EnergyDrinkPage]
})
export class EnergyDrinkPageModule {}
