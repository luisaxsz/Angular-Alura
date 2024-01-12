import { Injectable, inject } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {

  //Injeção de dependência em ts
  constructor(private http: HttpClient) { }
  //ou =>  http = inject(HttpClient) -> import @angular/core


}
