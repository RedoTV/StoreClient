import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductsService } from './services/products.service';
import { HttpClientModule }   from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { CatalogComponent } from './components/catalog/catalog.component';
import { IdentityRoomComponent } from './components/identity-room/identity-room.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import {ToggleVisibilityDirective} from './helpers/toggle-visibility.directive';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    CatalogComponent,
    IdentityRoomComponent,
    SignInComponent,
    ToggleVisibilityDirective,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
