import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item, LivrosResultado } from '../models/intefaces';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    private http : HttpClient
  ) { }

  private readonly API = "https://www.googleapis.com/books/v1/volumes"


  listarLivros(valorDigitado: string): Observable<LivrosResultado>{
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get<LivrosResultado>(this.API,{ params })
    //.pipe(
    //   // map(resultado => resultado.items ?? []),
    //   tap(resultado => console.log(resultado))
    // )
  }

}
