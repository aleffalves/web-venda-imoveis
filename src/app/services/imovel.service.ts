import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imovel } from '../models/imovel';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {

  urlBase : string = environment.urlBase

  constructor(private http : HttpClient) { }

  buscarTodosImoveis(): Observable<Imovel[]>{
    return this.http.get<Imovel[]>(this.urlBase + '/imovel');
  }
}
