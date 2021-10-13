import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormRegistreUmPedido, ViaCep } from '../model/registre-um-pedido';


const urlViaCep = "https://viacep.com.br/ws";
const urlApi = "";

@Injectable({
  providedIn: 'root'
})
export class RegistreUmPedidoService {

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<ViaCep> {
    return this.http.get<ViaCep>(`${urlViaCep}/${cep}/json`);
  }

  salvaDoador(form: FormRegistreUmPedido): Observable<any> {
    return this.http.post(urlApi, form);
  }

}
