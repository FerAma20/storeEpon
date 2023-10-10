import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { confirmComponent } from './confirm/confirm.component';
import { CartRoutingModule } from './shopping-routing.module';
import { StatusBarComponent } from './status-bar/status-bar.component';
import { ProductListComponent } from './productList/productList.component';


@NgModule({
  declarations: [
    ShoppingCartComponent,
    CheckoutComponent,
    confirmComponent,
    StatusBarComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
  ],
})
export class ShoppingCartModule { }
