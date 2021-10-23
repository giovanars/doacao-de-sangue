import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseGetAllPedidosDoacao, ResponseGoogleMaps, ResponseGoogleMapsDirection } from '../model/locais-de-doacao';

const maps = "https://maps.googleapis.com/maps/api";
const urlGoogleMaps = `${maps}/geocode/json?`;
const urlGoogleMapsDirections = `${maps}/directions/json?`;

const urlApi = "http://localhost:8080/pedido-doacao";
const key = "AIzaSyBM0MCoHJz9KaX_AxV8Tujl_jjbIk225wY";

@Injectable({
  providedIn: 'root'
})
export class LocaisDeDoacaoService {

  constructor(private http: HttpClient) { }

  getInfoGoogleMaps(cep: string): Observable<ResponseGoogleMaps> {
    console.log("Consultando API externa Google API Geocode");
    return this.http.get<ResponseGoogleMaps>(`${urlGoogleMaps}address=${cep}&key=${key}`);
  }

  getInfoGoogleMapsDirections(origin: string, destination: string): Observable<ResponseGoogleMapsDirection> {
    console.log("Consultando API externa Google API Directions");
    return this.http.get<ResponseGoogleMapsDirection>(`${urlGoogleMapsDirections}origin=${origin}&destination=${destination}&key=${key}`);
  }

  getAllPedidosDeDoacao(): Observable<ResponseGetAllPedidosDoacao[]> {
    console.log("Consultando back-end");
    return this.http.get<ResponseGetAllPedidosDoacao[]>(`${urlApi}`);
  }
}
