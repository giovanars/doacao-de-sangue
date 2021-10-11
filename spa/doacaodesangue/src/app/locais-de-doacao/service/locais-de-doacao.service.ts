import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGoogleMaps } from '../model/locais-de-doacao';

const urlGoogleMaps = "https://maps.googleapis.com/maps/api/geocode/json?";
const key = "AIzaSyBM0MCoHJz9KaX_AxV8Tujl_jjbIk225wY";

@Injectable({
  providedIn: 'root'
})
export class LocaisDeDoacaoService {

  constructor(private http: HttpClient) { }

  getInfoGoogleMaps(cep: string): Observable<ResponseGoogleMaps> {
    return this.http.get<ResponseGoogleMaps>(`${urlGoogleMaps}address=${cep}&key=${key}`);
  }
}
