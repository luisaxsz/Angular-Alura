import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Item } from 'src/app/interfaces/iItem';
import { ListaDeCompraService } from 'src/app/service/lista-de-compra.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit, OnChanges {
  valorItem!: string;
  @Input() itemQueVaiSerEditado!: Item;
  editando: boolean = false;
  textBtn = 'Salvar Item'

  constructor(private listaService: ListaDeCompraService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['itemQueVaiSerEditado'].firstChange){
      this.editando = true;
      this.textBtn = 'Editar Item';
      this.valorItem = this.itemQueVaiSerEditado?.nome;
    }
  }

  editarItem(){
    this.listaService.editarItem(this.itemQueVaiSerEditado, this.valorItem);
    this.limparCampo()
    this.editando = false;
    this.textBtn = 'Salvar Item'
  }

  ngOnInit(): void {}

  adicionarItem() {
    this.listaService.adicionarItem(this.valorItem);
    this.limparCampo();
  }

  limparCampo() {
    this.valorItem = '';
  }
}
