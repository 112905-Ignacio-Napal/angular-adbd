import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lista-numeros',
  templateUrl: './lista-numeros.component.html',
  styleUrls: ['./lista-numeros.component.css'],
})
export class ListaNumerosComponent implements OnInit {
  lista: number[];
  constructor() {
    this.lista = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 1000)
    );
  }

  ngOnInit(): void {}

  borarNumero(numero: number) {
    // let indice = this.lista.indexOf(numero);
    // this.lista.splice(indice, 1);
    this.lista = this.lista.filter((n) => n != numero);
  }
}
