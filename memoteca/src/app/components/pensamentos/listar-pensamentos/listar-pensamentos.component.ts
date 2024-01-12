import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamentos',
  templateUrl: './listar-pensamentos.component.html',
  styleUrls: ['./listar-pensamentos.component.css'],
})
export class ListarPensamentosComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: 'i love angular',
      autoria: 'nay',
      modelo: 'modelo3',
    },
    {
      conteudo: 'Teste',
      autoria: 'Dev',
      modelo: 'modelo1',
    },
    {
      conteudo: 'Teste2',
      autoria: 'Dev2',
      modelo: 'modelo2',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
