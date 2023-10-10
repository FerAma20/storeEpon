import { Component, EventEmitter, Output } from '@angular/core';
import {  shoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent {

  @Output()
  onNewStateCheck : EventEmitter<number> = new EventEmitter;

  datosEnvio: any = {
    cidudad: 'mexico',

  }; // Objeto para almacenar los datos de envío

  submitForm() {
    // Aquí puedes enviar los datos de envío al servidor o realizar otras acciones según tus necesidades.
    console.log(this.datosEnvio);
  }

  constructor(public shoppingCartService: shoppingCartService) { }

  setNewStateCheck = (state: number) =>{
    this.onNewStateCheck.emit(state);
  }
}
