import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-numero',
  templateUrl: './detalle-numero.component.html',
  styleUrls: ['./detalle-numero.component.css'],
})
export class DetalleNumeroComponent implements OnInit {
  @Input() numero: number = 0;
  @Output() onDelete = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  borarNumero() {
    this.onDelete.emit(this.numero);
  }
}
