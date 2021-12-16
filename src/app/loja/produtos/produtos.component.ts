import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  listaProdutos = [
    1, 3, 50, 36, 80, 324, 5462, 43
  ];

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  abrirProduto(produto) {
    this.router.navigate(['/loja/produto/', produto])
  }

  voltar() {
    this.router.navigate(['']);
  }

}
