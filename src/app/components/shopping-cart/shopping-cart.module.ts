import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { CartRoutingModule } from './shopping-routing.module';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CheckoutComponent,
    PaymentComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
})
export class ShoppingCartModule { }
