import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ShoppingCartComponent } from './cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { confirmComponent } from './confirm/confirm.component';

const routes: Routes = [
  { path: 'checkout', component: CheckoutComponent },
  { path: 'confirm', component: confirmComponent },
  { path: 'shoppingCart', component: ShoppingCartComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
