import {
  Component,
  Input,
  OnChanges,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit, OnChanges, OnDestroy {
  faPen = faPen;
  faTrash = faTrash;

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();
  @Output() emitindoIdParaDeletar = new EventEmitter();

  constructor() {}


  ngOnDestroy(): void {
    console.log("destroy")
  }

  ngOnInit(): void {}

  ngOnChanges(): void {}

  editarItem() {
    //angular.core
    this.emitindoItemParaEditar.emit(this.item);
  }

  statusItem() {
    if (this.item.comprado) {
      this.item.comprado = false;
    } else {
      this.item.comprado = true;
    }
  }

  deletarItem(){
    this.emitindoIdParaDeletar.emit(this.item.id)
  }
}
