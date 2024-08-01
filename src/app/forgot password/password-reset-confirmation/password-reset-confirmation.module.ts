import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PasswordResetConfirmationPageRoutingModule } from './password-reset-confirmation-routing.module';
import { PasswordResetPage } from './password-reset-confirmation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordResetConfirmationPageRoutingModule
  ],
  declarations: [PasswordResetPage]
})
export class PasswordResetConfirmationPageModule {}
