import { Component } from '@angular/core';

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
    // Aquí puedes realizar la lógica para procesar el pago según el método seleccionado
    console.log('Método de pago seleccionado:', this.metodoSeleccionado);
    // Puedes agregar más lógica de procesamiento de pago aquí

    // Cambia el estado de confirmado a true
    this.confirmado = true;
  }

}

