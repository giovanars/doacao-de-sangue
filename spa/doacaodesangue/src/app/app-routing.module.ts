import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LocaisDeDoacaoComponent } from './locais-de-doacao/locais-de-doacao.component';
import { PorQueDoarComponent } from './por-que-doar/por-que-doar.component';
import { SejaUmDoadorComponent } from './seja-um-doador/seja-um-doador.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'por-que-doar', component: PorQueDoarComponent },
  { path: 'locais-de-doacao', component: LocaisDeDoacaoComponent },
  { path: 'seja-um-doador', component: SejaUmDoadorComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
