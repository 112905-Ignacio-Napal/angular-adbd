import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BarraTituloComponent } from './barra-titulo/barra-titulo.component';
import { ListaNumerosComponent } from './lista-numeros/lista-numeros.component';
import { ContadorClicksComponent } from './contador-clicks/contador-clicks.component';
import { BotonOpinionComponent } from './boton-opinion/boton-opinion.component';
import { DetalleNumeroComponent } from './detalle-numero/detalle-numero.component';
import { JuegoComponent } from './juego/juego.component';
import { DadoComponent } from './dado/dado.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraTituloComponent,
    ListaNumerosComponent,
    ContadorClicksComponent,
    BotonOpinionComponent,
    DetalleNumeroComponent,
    JuegoComponent,
    DadoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
