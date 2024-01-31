import {  Item } from './../../models/intefaces';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Livro } from 'src/app/models/intefaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent implements OnDestroy {
  listaLivros: Livro[];
  subscription: Subscription;
  campoBusca: string = '';
  livro: Livro;

  constructor(private service: LivroService) {}

  livrosResultadoParaLivros(item: Item[]): LivroVolumeInfo[] {
    //Iterar cada elemento do array
    //E atribuir propriedades
    //Refatorado para livro volume info

    // const livros: Livro[] = [];

    // items.forEach((item) => {
    //   livros.push(
    //     (this.livro = {
    //       title: item.volumeInfo?.title,
    //       authors: item.volumeInfo?.authors,
    //       publisher: item.volumeInfo?.publisher,
    //       publishedDate: item.volumeInfo?.publishedDate,
    //       description: item.volumeInfo?.description,
    //       previewLink: item.volumeInfo?.previewLink,
    //       thumbnail: item.volumeInfo?.imageLinks?.thumbnail,
    //     })
    //   );
    // });

    return item.map(item => {
      return new LivroVolumeInfo(item)
    });
  }

  buscarLivros() {
    this.subscription = this.service.listarLivros(this.campoBusca).subscribe({
      next: (items) => {
        this.listaLivros = this.livrosResultadoParaLivros(items);
      },
      error: (error) => console.error(error),
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
