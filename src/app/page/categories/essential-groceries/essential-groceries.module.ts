import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EssentialGroceriesPageRoutingModule } from './essential-groceries-routing.module';

import { EssentialGroceriesPage } from './essential-groceries.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EssentialGroceriesPageRoutingModule
  ],
  declarations: [EssentialGroceriesPage]
})
export class EssentialGroceriesPageModule {}
