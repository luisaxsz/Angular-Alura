import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  constructor(
    private http : HttpClient
  ) { }

  private readonly API = "https://www.googleapis.com/books/v1/volumes"


  listarLivros(valorDigitado: string): Observable<any>{
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get(this.API,{ params })
  }

}
