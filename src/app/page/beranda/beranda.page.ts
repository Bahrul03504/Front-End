import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beranda',
  templateUrl: './beranda.page.html',
  styleUrls: ['./beranda.page.scss'],
})
export class BerandaPage implements OnInit {
  rating: number = 4; // Deklarasi properti rating dengan nilai awal 0

  constructor() { }

  ngOnInit() {
    // Logika atau inisialisasi lainnya bisa ditambahkan di sini jika diperlukan
  }
}
