import { Injectable } from '@angular/core';

interface Product {
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Product[] = [];

  constructor() {}

  getCart(): Product[] {
    return this.cart;
  }

  clearCart() {
    this.cart = [];
  }

  addToCart(product: Product) {
    this.cart.push(product);
  }
}
