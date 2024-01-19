import { Component, Input, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent implements OnInit {

  @Input() pensamento: Pensamento = {
    id: 0,
    conteudo: 'I love Angular',
    autoria: 'Nay',
    modelo: 'modelo3',
    favorito: false
  }

  @Input() listaFavoritos: Pensamento [] = [];

  constructor(
    private service: PensamentoService
  ) { }

  ngOnInit(): void {
  }

  larguraPensamento(): string{
    if(this.pensamento.conteudo.length >= 256){
      return "pensamento-g"
    }else{
      return "pensamento-p"
    }
  }

  iconeFavorito(): string{
    if(this.pensamento.favorito == false){
      return "inativo"
    }else{
      return "ativo"
    }
  }

  mudarFavorito(){
    this.service.mudarFavorito(this.pensamento).subscribe(
      //posição do favorito dentro do array e quantidade de itens que quer remover
      //como não sei qual o indicie passa o indexOf
      () => {this.listaFavoritos.splice(this.listaFavoritos.indexOf(this.pensamento), 1)}
    )
  }
}
