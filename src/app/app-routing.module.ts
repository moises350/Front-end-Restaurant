import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  { path: 'menu', component: MenuListComponent },
  { path: 'pedido', component: PedidoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
