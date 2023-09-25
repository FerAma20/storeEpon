import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartRoutingModule } from './components/shopping-cart/shopping-routing.module';

const routes: Routes = [

  {path: 'product',component: ProductComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'shoppingCart', loadChildren: () => import('./components/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  {path: '**', component: CatalogComponent},
];

@NgModule({
  imports: [

  RouterModule.forRoot(routes),
  CartRoutingModule
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
