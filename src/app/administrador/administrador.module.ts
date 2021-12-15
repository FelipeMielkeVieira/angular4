import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GerenciarProdutosComponent } from './gerenciar-produtos/gerenciar-produtos.component';
import { GerenciarClientesComponent } from './gerenciar-clientes/gerenciar-clientes.component';
import {LojaModule} from '../loja/loja.module';

import { RouterModule } from '@angular/router';
import routes from './administrador.routes';

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule,
    LojaModule
  ],
  declarations: [GerenciarProdutosComponent, GerenciarClientesComponent],
  exports: [GerenciarProdutosComponent]
})
export class AdministradorModule { }
