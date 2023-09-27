import { Component, OnInit } from '@angular/core';
import { shoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styles: [
  ]
})
export class ShoppingCartComponent {

  constructor(public shoppingCartService: shoppingCartService) { }

  items = this.shoppingCartService.getItems();


  }



