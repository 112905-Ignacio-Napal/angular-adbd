import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-juego',
  templateUrl: './juego.component.html',
  styleUrls: ['./juego.component.css'],
})
export class JuegoComponent implements OnInit {
  dados = [
    {
      numero: 1,
      imagePath: '../../assets/Dice1.png',
    },
    {
      numero: 2,
      imagePath: '../../assets/Dice2.png',
    },
    {
      numero: 3,
      imagePath: '../../assets/Dice3.png',
    },
    {
      numero: 4,
      imagePath: '../../assets/Dice4.png',
    },
    {
      numero: 5,
      imagePath: '../../assets/Dice5.png',
    },
    {
      numero: 6,
      imagePath: '../../assets/Dice6.png',
    },
  ];
  dadosEnJuego = [
    {
      numero: 1,
      imagePath: '../../assets/Dice1.png',
    },
    {
      numero: 2,
      imagePath: '../../assets/Dice2.png',
    },
    {
      numero: 3,
      imagePath: '../../assets/Dice3.png',
    },
    {
      numero: 4,
      imagePath: '../../assets/Dice4.png',
    },
    {
      numero: 5,
      imagePath: '../../assets/Dice5.png',
    },
  ];

  contador: number = 0;

  mensaje: string = '';
  constructor() {}

  ngOnInit(): void {}

  tirarDados() {
    let iguales = true;

    this.dadosEnJuego.forEach((dado, indice) => {
      const random = this.getNumeroRandom();
      dado.imagePath = this.dados[random].imagePath;
      dado.numero = this.dados[random].numero;

      if (indice != 0 && this.dadosEnJuego[indice - 1].numero != dado.numero) {
        iguales = false;
      }
    });

    if (!iguales) {
      this.contador++;
      this.mensaje = `Vas tirando los 🎲 ${
        this.contador > 1 ? this.contador + ' veces' : this.contador + ' vez'
      }`;
    } else {
      this.mensaje = `Generala!!! Tiraste los 🎲 ${this.contador} veces`;
      this.contador = 0;
    }
  }

  getNumeroRandom(): number {
    return Math.floor(Math.random() * 6);
  }
}
