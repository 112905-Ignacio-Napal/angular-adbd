import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'boton-opinion',
  templateUrl: './boton-opinion.component.html',
  styleUrls: ['./boton-opinion.component.css'],
})
export class BotonOpinionComponent implements OnInit {
  mensaje: string = '';
  classColor: string = '';
  colores = [
    { texto: 'rojo', color: 'red' },
    { texto: 'amarillo', color: 'yellow' },
    { texto: 'verde', color: 'green' },
  ];
  constructor() {}

  ngOnInit(): void {}

  mostrarMensaje(e: MouseEvent) {
    const button = e.target as HTMLElement;

    this.mensaje = 'Usted clickeó el botón ';
    if (button.id === 'rojo') {
      this.mensaje += 'rojo';
      this.classColor = 'rojo';
    } else if (button.id === 'amarillo') {
      this.mensaje += 'amarillo';
      this.classColor = 'amarillo';
    } else {
      this.mensaje += 'verde';
      this.classColor = 'verde';
    }
  }
}
