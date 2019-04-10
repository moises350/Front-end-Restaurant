import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MenuListComponent } from './menu-list/menu-list.component';
import { WelcomeHomeComponent } from './welcome-home/welcome-home.component';
import { PedidoComponent } from './pedido/pedido.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuListComponent,
    WelcomeHomeComponent,
    PedidoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
