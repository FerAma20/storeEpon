import { Component, OnInit } from '@angular/core';
import { shoppingCartService } from '../shopping-cart.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styles: [

  ]
})
export class StatusBarComponent {
  constructor(private shoppingCartService: shoppingCartService) { }

  pasoActual: any = this.shoppingCartService.pasoActual;

}

