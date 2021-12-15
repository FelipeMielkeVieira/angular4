import { Routes } from "@angular/router";
import { GerenciarProdutosComponent } from "./gerenciar-produtos/gerenciar-produtos.component";
import { GerenciarClientesComponent } from "./gerenciar-clientes/gerenciar-clientes.component";

const routes: Routes = [
    { path: 'gerenciar-produtos', component: GerenciarProdutosComponent},
    { path: 'gerenciar-clientes', component: GerenciarClientesComponent},
];

export default routes;