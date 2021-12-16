import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AdministradorModule} from './administrador/administrador.module';
import {LojaModule} from './loja/loja.module';
import {ClienteModule} from './cliente/cliente.module';
import { Router, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AdministradorModule,
    LojaModule,
    ClienteModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
