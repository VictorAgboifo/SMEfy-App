import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage  {
  cartItems: any[] = [];

  constructor(private cartService: CartService) {}

  

  placeOrder() {
    // Handle order placement
  }
}
