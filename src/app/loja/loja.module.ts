import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutosComponent } from './produtos/produtos.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProdutosComponent],
  exports: [ProdutosComponent]
})
export class LojaModule { }
