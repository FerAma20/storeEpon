import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styles: [
  ]
})
export class CheckoutComponent {
  datosEnvio: any = {
    cidudad: 'mexico',
    
  }; // Objeto para almacenar los datos de envío

  submitForm() {
    // Aquí puedes enviar los datos de envío al servidor o realizar otras acciones según tus necesidades.
    console.log(this.datosEnvio);
  }
}
