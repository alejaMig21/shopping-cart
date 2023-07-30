import { Component } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  cartItems: CartItem[] = [
    {
      imageUrl: 't-shirt.png',
      name: 'T-Shirt',
      price: 18.99
    },
    {
      imageUrl: 'jeans.png',
      name: 'Jeans',
      price: 24.99
    }
  ]
}
