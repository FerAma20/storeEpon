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
  statusCart = 1;
  items = this.shoppingCartService.getItems();


  setNewState = (state : number) =>{
    console.log('print output')
    console.log(state)
    this.statusCart = state;
  }
}



