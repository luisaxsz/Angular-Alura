import { FormControl } from '@angular/forms';
import { Item, LivrosResultado } from './../../models/intefaces';
import { Component, OnDestroy } from '@angular/core';
import {
  EMPTY,
  Subscription,
  catchError,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  of,
  switchMap,
  tap,
  throwError,
} from 'rxjs';
import { Livro } from 'src/app/models/intefaces';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300;

@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  //Criada diretamente no templape com pipe async
  // listaLivros: Livro[];
  // subscription: Subscription;
  campoBusca = new FormControl();
  mensagemErro: string = '';
  livrosResultado: LivrosResultado;
  // livro: Livro;
  totalLivros$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.service.listarLivros(valorDigitado)),
    map(resultado => this.livrosResultado = resultado),
    catchError(erro => {
      console.log(erro)
      return of();
    })
  )
  //$ -> representa observable
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length >= 3),
    distinctUntilChanged(),
    switchMap((valorDigitado) => this.service.listarLivros(valorDigitado)),
    map(resultado => resultado.items ?? []),
    map((itens) => this.livrosResultadoParaLivros(itens)),
    catchError((error) => {
      // this.mensagemErro = 'Ops ocorreu um erro, recarregue  a aplicação'
      // return EMPTY;
      // console.log(error);
      return throwError(() => new Error(this.mensagemErro = 'Ops ocorreu um erro, recarregue  a aplicação'));
    })
  );

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

    return item.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }

  // buscarLivros() {
  //   this.subscription = this.service.listarLivros(this.campoBusca).subscribe({
  //     next: (items) => {
  //       this.listaLivros = this.livrosResultadoParaLivros(items);
  //     },
  //     error: (error) => console.error(error),
  //   });
  // }

  // ngOnDestroy() {
  //   this.subscription.unsubscribe();
  // }
}
