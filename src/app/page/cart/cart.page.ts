import { Component, OnInit } from '@angular/core';

interface CartItem {
  id: number;
  name: string;
  price: number;
  weight: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
  cartItems: CartItem[] = [
    { id: 1, name: 'Fresh Broccoli', price: 2.22, weight: 1.5, quantity: 5 },
    { id: 2, name: 'Fresh Broccoli', price: 2.22, weight: 1.5, quantity: 5 }
  ];
  subtotal = 0;
  shipping = 1.60;
  total = 0;

  constructor() { }

  ngOnInit() {
    this.calculateTotal();
  }

  increaseQuantity(item: CartItem) {
    item.quantity++;
    this.calculateTotal();
  }

  decreaseQuantity(item: CartItem) {
    if (item.quantity > 0) {
      item.quantity--;
      this.calculateTotal();
    }
  }

  clearCart() {
    this.cartItems.forEach(item => item.quantity = 0);
    this.calculateTotal();
  }

  calculateTotal() {
    this.subtotal = this.cartItems.reduce((acc, item) => acc + item.price * item.weight * item.quantity, 0);
    this.total = this.subtotal + this.shipping;
  }

  checkout() {
    console.log('Checkout');
  }
}
