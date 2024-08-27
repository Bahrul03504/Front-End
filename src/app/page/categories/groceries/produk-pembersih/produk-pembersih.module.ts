import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProdukPembersihPageRoutingModule } from './produk-pembersih-routing.module';

import { ProdukPembersihPage } from './produk-pembersih.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProdukPembersihPageRoutingModule
  ],
  declarations: [ProdukPembersihPage]
})
export class ProdukPembersihPageModule {}
