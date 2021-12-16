import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdministradorModule } from './administrador/administrador.module';
import { LojaModule } from './loja/loja.module';
import { ClienteModule } from './cliente/cliente.module';
import { Router, RouterModule } from '@angular/router';
import CheckLogged from './checkLogged.canactivate';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        canActivate: []
      }
    ]),
    BrowserModule,
    AdministradorModule,
    LojaModule,
    ClienteModule,
    RouterModule,
    FormsModule
  ],
  providers: [CheckLogged],
  bootstrap: [AppComponent]
})
export class AppModule { }
