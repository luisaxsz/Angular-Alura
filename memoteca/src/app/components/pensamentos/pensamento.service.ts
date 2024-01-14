import { Injectable, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"
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

  listar(): Observable<Pensamento[]>{
    return this.http.get<Pensamento[]>(this.API)
  }

  buscarPorId(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }

  criar(pensamento: Pensamento){
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  excluir(id: string): Observable<Pensamento> {
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  atualizar(id: string, pensamento: Pensamento){
    const url = `${this.API}/${id}`
    return this.http.put<Pensamento>(url,pensamento)
  }

}
