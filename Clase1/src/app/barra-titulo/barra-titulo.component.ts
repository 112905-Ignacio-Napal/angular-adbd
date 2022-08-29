import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'barra-titulo',
  templateUrl: './barra-titulo.component.html',
  styleUrls: ['./barra-titulo.component.css'],
})
export class BarraTituloComponent implements OnInit {
  titulo = 'Titulo de la barra';
  numero: number;
  cliente = { nombre: 'Juan', apellido: 'Perez' };

  constructor() {
    this.numero = Math.floor(Math.random() * 1000);
  }

  ngOnInit(): void {}
}
