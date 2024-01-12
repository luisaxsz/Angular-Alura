import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento = {
    conteudo: "i love angular",
    autoria: "nay",
    modelo: "modelo3"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
