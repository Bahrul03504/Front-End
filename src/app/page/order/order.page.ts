import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {
  products: Product[] = [
    {
      name: 'Sunlight Sabun Cuci Piring Jer...',
      price: 15000,
      image: 'assets/img/Mie/indomie/Mi Goreng Rendang.png', // Ganti dengan path gambar yang sesuai
      quantity: 1
    },
    {
      name: 'Lifebuoy 3 in 1 Sabun Mandi, ...',
      price: 28200,
      image: 'assets/img/Mie/indomie/Mi Goreng Rendang.png', // Ganti dengan path gambar yang sesuai
      quantity: 1
    },
    {
      name: 'Selection Kapas Wajah 35 g',
      price: 8400,
      image: 'assets/img/Mie/indomie/Mi Goreng Rendang.png', // Ganti dengan path gambar yang sesuai
      quantity: 1
    }
  ];

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
  }
}
