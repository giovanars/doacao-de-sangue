import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViaCep, FormSejaUmDoador } from '../model/seja-um-doador';
import { Observable } from 'rxjs';


const urlViaCep = "https://viacep.com.br/ws";
const urlApi = "";

@Injectable({
  providedIn: 'root'
})
export class SejaUmDoadorService {

  constructor(private http: HttpClient) { }

  getCep(cep: string): Observable<ViaCep> {
    return this.http.get<ViaCep>(`${urlViaCep}/${cep}/json`);
  }

  salvaDoador(form: FormSejaUmDoador): Observable<any> {
    return this.http.post(urlApi, form);
  }

}
