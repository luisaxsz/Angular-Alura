import { Component } from '@angular/core';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css']
})
export class ListaLivrosComponent {

  listaLivros: [];

  constructor(
    private service: LivroService
  ) { }

  campoBusca: string = ''

  buscarLivros(){
    this.service.listarLivros(this.campoBusca).subscribe((livros) => console.log(livros), (error) => console.log(error))
  }
}



