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
    fetch('https://wcl2kt86-4208.use2.devtunnels.ms/epon/readAllProducts')
      .then((response) => response.json())
      .then((quotesData) => (this.data = quotesData));
  }


}
