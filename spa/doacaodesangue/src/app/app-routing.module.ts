import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocaisDeDoacaoComponent } from './locais-de-doacao/locais-de-doacao.component';
import { PorQueDoarComponent } from './por-que-doar/por-que-doar.component';
import { RegistreUmPedidoComponent } from './registre-um-pedido/registre-um-pedido.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'por-que-doar', component: PorQueDoarComponent },
  { path: 'locais-de-doacao', component: LocaisDeDoacaoComponent },
  { path: 'registre-um-pedido', component: RegistreUmPedidoComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
