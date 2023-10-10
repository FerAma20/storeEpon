import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { shoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'product-component',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {

  constructor( public shoppingCartService: shoppingCartService){};
  title = 'web-app';

  ngOnInit(): void {
    initFlowbite();
  }
}
