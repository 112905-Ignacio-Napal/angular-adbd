import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador-clicks',
  templateUrl: './contador-clicks.component.html',
  styleUrls: ['./contador-clicks.component.css'],
})
export class ContadorClicksComponent implements OnInit {
  cantidad: number;

  constructor() {
    this.cantidad = 0;
  }

  ngOnInit(): void {}

  contar(event: MouseEvent) {
    const button = event.target as HTMLElement;
    button.id === 'S' ? this.cantidad++ : this.cantidad--;
  }
}
