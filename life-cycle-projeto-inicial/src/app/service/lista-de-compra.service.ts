import { Item } from './../interfaces/iItem';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListaDeCompraService {

  private listaDeCompra: Item[] = [
    {
      "id": 1,
      "nome": "Queijo prato",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 2,
      "nome": "Leite integral",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": false
    },
    {
      "id": 3,
      "nome": "Mamão papaia",
      "data": "Segunda-feira (31/10/2022) às 08:30",
      "comprado": true
    },
  ]

  constructor() {
    console.log('Instanciando dependências necessárias para o serviço.');
  }

  getListaDeCompra(){
    return this.listaDeCompra;
  }

  criarItem(nomeDoItem: string){
    const id = this.listaDeCompra.length + 1;
    const item = {
      id: id,
      nome: nomeDoItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: false
    };

    return item;
  }

  adicionarItem(nomeDoItem: string){
    const item = this.criarItem(nomeDoItem);
    this.listaDeCompra.push(item);
  }

  editarItem(itemAntigo: Item, nomeEditadoItem: string){
    const itemEditado: Item = {
      id: itemAntigo.id,
      nome: nomeEditadoItem,
      data: new Date().toLocaleDateString('pt-BR'),
      comprado: itemAntigo.comprado
    }
    const id = itemAntigo.id;
    //Pecorre o array acha o item naquela posição, remove 1 item de acordo com aquela posição e substitui pelo item editado
    this.listaDeCompra.splice(Number(id) - 1, 1, itemEditado);

    return itemEditado;
  }
}
