import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.component.html',
  styleUrls: ['./dado.component.css'],
})
export class DadoComponent implements OnInit {
  defaultPath = '../../assets/Dice1.png';

  @Input() imagePath: string = this.defaultPath;
  constructor() {}

  ngOnInit(): void {}
}
