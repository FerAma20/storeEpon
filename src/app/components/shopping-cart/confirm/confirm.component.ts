import { Component } from '@angular/core';
import { shoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-payment',
  templateUrl: './confirm.component.html',
  styles: [
  ]
})
export class confirmComponent {
  metodoSeleccionado: string = ''; // Propiedad para almacenar el método de pago seleccionado
  confirmado: boolean = false; // Propiedad para controlar el estado del botón

  submitForm() {
    console.log('Método de pago seleccionado:', this.metodoSeleccionado);
    this.confirmado = true;
  }

  constructor(public shoppingCartService: shoppingCartService) { }

  metodoPago: string = "Visa Cuotas";
}

