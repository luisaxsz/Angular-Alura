import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(
    private http: HttpClient
  ) { }

  API = 'http://viacep.com.br/ws/'

  getConsultaCep(cep: string){
    return this.http.get(`${this.API}/${cep}/json`);
  }
}
