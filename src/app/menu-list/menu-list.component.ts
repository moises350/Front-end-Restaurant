import { Component, OnInit } from '@angular/core';
import { Menu } from '../models/menu.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})
export class MenuListComponent implements OnInit {

  menus : Menu[] = [];
  menus2 : Menu[] = [];

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getMenu().subscribe(response => {
      this.menus = response;
    });
  }

  getMenu(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/cardapio`)
      .pipe(map(response => {
          return response;
        })
      );
  }

  addToOrder(menu)
  {
    this.menus2.push(menu);
  }

  removeOrder(index)
  {
    this.menus2.splice(index,1);
  }

  saveOrder(){
    return this.http.post<any>(
      'http://localhost:8080/pedidos',
      JSON.stringify({orderDescription: "6tetetettet" ,value: 7.5}),
      {headers: this.headers}
      // doenst work =(
    )
  }

}
