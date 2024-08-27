import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KopiTehPageRoutingModule } from './kopi-teh-routing.module';

import { KopiTehPage } from './kopi-teh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KopiTehPageRoutingModule
  ],
  declarations: [KopiTehPage]
})
export class KopiTehPageModule {}
