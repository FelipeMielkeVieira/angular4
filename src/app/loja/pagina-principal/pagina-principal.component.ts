import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagina-principal',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  pgProdutos() {
    this.router.navigate(['/loja/produto/']);
  }

  pgClientes() {
    this.router.navigate(['/gerenciar-clientes'])
  }

  pgLogin() {
    this.router.navigate(['/login'])
  }

  logout() {
    localStorage.removeItem('USER');
    this.router.navigate([''])
  }

}
