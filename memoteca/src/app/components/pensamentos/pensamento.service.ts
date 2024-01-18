import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http"
import { Pensamento } from './pensamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  //Injeção de dependência em ts
  constructor(private http: HttpClient) { }
  //ou =>  http = inject(HttpClient) -> import @angular/core

  private readonly API = "http://localhost:3000/pensamentos"

  listar(pagina: number): Observable<Pensamento[]>{
    const itensPorPagina = 6;
     //Http Params - Classe imutável
     //Set substitui valor - nome parametro e valor
     let params = new HttpParams()
     .set("_page",pagina)
     .set("_limit", itensPorPagina);

    //Api, objeto params e valor params
    return this.http.get<Pensamento[]>(this.API, { params })

    //Não indicado
    //return this.http.get<Pensamento[]>(`${this.API}?page=${pagina}&_limit${itemPorPag}`)
  }

  buscarPorId(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

  criar(pensamento: Pensamento){
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: number): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  editar(pensamento: Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url,pensamento)
  }

}
