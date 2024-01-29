import { Component, Input, OnChanges, OnInit, Output, EventEmitter} from '@angular/core';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Item } from 'src/app/interfaces/iItem';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit, OnChanges {

  faPen = faPen;
  faTrash = faTrash

  @Input() item!: Item;
  @Output() emitindoItemParaEditar = new EventEmitter();

  constructor() { }

  ngOnInit(): void { };

  ngOnChanges(): void {};

  editarItem(){
    //angular.core
    this.emitindoItemParaEditar.emit(this.item);
  }


}
