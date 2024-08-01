import { Component, OnInit } from '@angular/core';
import { ActionSheetController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  fullname: string = 'Ahmad Lutfi Ramadhan';
  gender: string = 'Laki-laki';
  birthdate: string = '2003-11-03';

  constructor(
    private actionSheetController: ActionSheetController,
    private alertController: AlertController
  ) {}

  ngOnInit() {}

  async presentGenderActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pilih Jenis Kelamin',
      buttons: [
        {
          text: 'Laki-laki',
          handler: () => {
            this.gender = 'Laki-laki';
            return true;
          },
        },
        {
          text: 'Perempuan',
          handler: () => {
            this.gender = 'Perempuan';
            return true;
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentNameActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Edit Fullname',
      buttons: [
        {
          text: 'Change Name',
          handler: () => {
            this.presentNamePrompt();
            return true;
          },
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentNamePrompt() {
    const alert = await this.alertController.create({
      header: 'Enter New Name',
      inputs: [
        {
          name: 'newName',
          type: 'text',
          placeholder: 'Fullname',
          value: this.fullname,
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
        {
          text: 'Save',
          handler: (data: { newName: string }) => {
            if (data.newName) {
              this.fullname = data.newName;
            }
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async presentPasswordActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Tetapkan Sandi',
      buttons: [
        {
          text: 'Ubah Sandi',
          handler: () => {
            this.presentPasswordPrompt();
            return true;
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentPasswordPrompt() {
    const alert = await this.alertController.create({
      header: 'Masukkan Sandi Baru',
      inputs: [
        {
          name: 'newPassword',
          type: 'password',
          placeholder: 'Sandi Baru',
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
        {
          text: 'Simpan',
          handler: (data: { newPassword: string }) => {
            // Implement your logic to save the new password
            if (data.newPassword) {
              // Update the displayed password or perform any other action
              // For example:
              console.log('New Password:', data.newPassword);
            }
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async presentPhoneActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ubah Seluler',
      buttons: [
        {
          text: 'Ubah Nomor',
          handler: () => {
            this.presentPhonePrompt();
            return true;
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentPhonePrompt() {
    const alert = await this.alertController.create({
      header: 'Masukkan Nomor Seluler Baru',
      inputs: [
        {
          name: 'newPhoneNumber',
          type: 'tel',
          placeholder: 'Nomor Seluler Baru',
          value: '089*******76', // Set initial value here
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
        {
          text: 'Simpan',
          handler: (data: { newPhoneNumber: string }) => {
            // Implement your logic to save the new phone number
            if (data.newPhoneNumber) {
              // Update the displayed phone number or perform any other action
              // For example:
              console.log('New Phone Number:', data.newPhoneNumber);
            }
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async presentEmailActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Ganti e-mail',
      buttons: [
        {
          text: 'Ubah Alamat E-mail',
          handler: () => {
            this.presentEmailPrompt();
            return true;
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentEmailPrompt() {
    const alert = await this.alertController.create({
      header: 'Masukkan Alamat E-mail Baru',
      inputs: [
        {
          name: 'newEmail',
          type: 'email',
          placeholder: 'Alamat E-mail Baru',
          value: 'ah***********@gmail.com', // Set initial value here
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
        {
          text: 'Simpan',
          handler: (data: { newEmail: string }) => {
            // Implement your logic to save the new email address
            if (data.newEmail) {
              // Update the displayed email or perform any other action
              // For example:
              console.log('New Email:', data.newEmail);
            }
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async presentBirthdateActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pilih Tanggal Lahir',
      buttons: [
        {
          text: 'Ubah Tanggal',
          handler: () => {
            this.presentDatePicker();
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentDatePicker() {
    const alert = await this.alertController.create({
      header: 'Pilih Tanggal Lahir',
      inputs: [
        {
          name: 'birthdate',
          type: 'date',
          value: this.birthdate,
        },
      ],
      buttons: [
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          },
        },
        {
          text: 'Simpan',
          handler: (data: { birthdate: string }) => {
            if (data.birthdate) {
              this.birthdate = data.birthdate;
              console.log('New Birthdate:', data.birthdate);
            }
            return true;
          },
        },
      ],
    });
    await alert.present();
  }

  async presentSocialMediaActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pilih Akun Media Sosial',
      buttons: [
        {
          text: 'Google',
          icon: 'logo-google',
          handler: () => {
            console.log('Google selected');
            // Implement your logic to handle Google account
            return true;
          },
        },
        {
          text: 'Facebook',
          icon: 'logo-facebook',
          handler: () => {
            console.log('Facebook selected');
            // Implement your logic to handle Facebook account
            return true;
          },
        },
        {
          text: 'TikTok',
          icon: 'logo-tiktok',
          handler: () => {
            console.log('TikTok selected');
            // Implement your logic to handle TikTok account
            return true;
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }

  async presentProfilePicActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Pilih Foto Profil',
      buttons: [
        {
          text: 'Ambil Foto',
          handler: () => {
            console.log('Ambil Foto clicked');
            // Implement logic to take a photo
            return true;
          },
        },
        {
          text: 'Pilih dari Galeri',
          handler: () => {
            console.log('Pilih dari Galeri clicked');
            // Implement logic to choose from gallery
            return true;
          },
        },
        {
          text: 'Hapus Foto',
          handler: () => {
            console.log('Hapus Foto clicked');
            // Implement logic to delete photo
            return true;
          },
        },
        {
          text: 'Batal',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            return true;
          },
        },
      ],
    });
    await actionSheet.present();
  }
}
