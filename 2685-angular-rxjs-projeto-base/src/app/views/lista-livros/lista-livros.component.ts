import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: [];
  subscription: Subscription;

  constructor(private service: LivroService) {}

  campoBusca: string = '';

  buscarLivros() {
    this.subscription = this.service.listarLivros(this.campoBusca).subscribe(
      {
        next: livros => console.log(livros),
        error: error => console.error(error),
      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

}
