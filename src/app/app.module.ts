import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ProductComponent } from './components/product/product.component';
import { ContactComponent } from './components/contact/contact.component';
import { StatusBarComponent } from './components/shopping-cart/status-bar/status-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    CatalogComponent,
    SidebarComponent,
    ProductComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
