import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class shoppingCartService {


  //funciones para manipular la barra de estado de compras
  pasoActual: any = 0;

  addStep() {
    this.pasoActual = this.pasoActual + 1;
  }

  resetStautsBar() {
    this.pasoActual = 0;
  }

  items: string[] = [];

  //funciones para manipular los productos en el carrito de compras

  addShoppingCart(producto: string) {
    this.items.push(producto);
  }

  getItems() {
    return this.items;
  }

  cleanShoppingCart() {
    this.items = [];
    return this.items;
  }

}
