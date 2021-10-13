import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HomeComponent } from './home/home.component';
import { PorQueDoarComponent } from './por-que-doar/por-que-doar.component';
import { LocaisDeDoacaoComponent } from './locais-de-doacao/locais-de-doacao.component';
import { RegistreUmPedidoComponent } from './registre-um-pedido/registre-um-pedido.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PorQueDoarComponent,
    LocaisDeDoacaoComponent,
    RegistreUmPedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
