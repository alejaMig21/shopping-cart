import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from './cart-item';

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input() cartItem: CartItem = {
    imageUrl: 't-shirt.png',
    name: 'T-Shirt',
    price: 18.99
  }

  @Output() cartItemDelete = new EventEmitter<void>();

  onDeleteClick(): void
  {
    this.cartItemDelete.emit();
  }
}
