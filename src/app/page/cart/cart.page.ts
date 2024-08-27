import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cart: Product[] = [];
  hasProducts: boolean = false;
  showSearchbar: boolean = false;
  searchQuery: string = '';

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.loadCart();
  }

  loadCart() {
    this.cart = this.cartService.getCart();
    this.hasProducts = this.cart.length > 0;
    console.log('Load Cart - hasProducts:', this.hasProducts); // Debugging
  }

  clearCart() {
    this.cartService.clearCart();
    this.loadCart(); // Memuat ulang keranjang setelah membersihkan
    console.log('Clear Cart - hasProducts:', this.hasProducts); // Debugging
  }

  toggleSearchbar() {
    this.showSearchbar = !this.showSearchbar;
    console.log('Searchbar Toggled - showSearchbar:', this.showSearchbar); // Debugging
  }
}
