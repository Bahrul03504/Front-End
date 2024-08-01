import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage {
  password!: string;
  confirmPassword!: string;

  constructor(private navCtrl: NavController) {}

  onSubmit() {
    if (this.password !== this.confirmPassword) {
      // Show an error message if passwords do not match
      alert('Passwords do not match');
      return;
    }

    // Handle password update logic here
    console.log('Password updated successfully');
    this.navCtrl.back();
  }
}
