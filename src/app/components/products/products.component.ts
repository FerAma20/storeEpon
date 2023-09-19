import { Component } from '@angular/core';

@Component({
  selector: 'products-component',
  templateUrl: './products.component.html',
  styles: [
  ]
})
export class ProductsComponent {
  products = [
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1.',
      price: 10.00,
      quantity: 1
    },
    {
      id: 2,
      name: 'Producto 2',
      description: 'Descripción del producto 2.',
      price: 15.00,
      quantity: 1
    },
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1.',
      price: 10.00,
      quantity: 1
    },
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1.',
      price: 10.00,
      quantity: 1
    },
    {
      id: 1,
      name: 'Producto 1',
      description: 'Descripción del producto 1.',
      price: 10.00,
      quantity: 1
    },

    // Agrega más productos si es necesario
  ];
}
