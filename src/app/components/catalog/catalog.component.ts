import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { shoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'catalog-component',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {

  constructor(
    public shoppingCartService: shoppingCartService
    ){}



  title = 'web-app';
  data: any;
  ngOnInit(): void {
    initFlowbite();
    this.getProducts();
  }

  getProducts = () =>{
    fetch('http://18.224.93.52:4208/epon/readAllProducts')
      .then((response) => response.json())
      .then((quotesData) => (this.data = quotesData));
  }


}
