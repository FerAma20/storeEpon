import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactComponent } from './components/contact/contact.component';
import { CartRoutingModule } from './components/shopping-cart/shopping-routing.module';

const routes: Routes = [

  {path: 'products',component: ProductsComponent},
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
