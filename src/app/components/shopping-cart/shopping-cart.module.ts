import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { CartRoutingModule } from './shopping-routing.module';
import { StatusBarComponent } from './status-bar/status-bar.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CheckoutComponent,
    PaymentComponent,
    StatusBarComponent,
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
})
export class ShoppingCartModule { }
