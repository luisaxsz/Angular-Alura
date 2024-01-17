import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {

  listaPensamentos: Pensamento[] = [];
  paginaAtual: number = 1;
  haMaisPensamentos: boolean = true;

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listar(this.paginaAtual).subscribe((listaPensamentos) => this.listaPensamentos = listaPensamentos)
  }

  carregarMaisPensamentos(){
    //Pagina incrementada

    this.service.listar(++this.paginaAtual).subscribe((listaPensamentos) =>{
      //Spread operator -> pensamentos existentes + os 6 novos
      this.listaPensamentos.push(...listaPensamentos)
      if(!listaPensamentos.length){
          this.haMaisPensamentos = false
      }
    })
  }
}
