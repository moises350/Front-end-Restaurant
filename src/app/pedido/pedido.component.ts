import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  ingredients: Ingredient[] = [];

  ingredients2: Ingredient[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getIngredientes().subscribe(response => {
        this.ingredients = response;
      });
  }

  addToOrder(ingredient)
  {
    this.ingredients2.push(ingredient);
  }

  removeOrder(index)
  {
    this.ingredients2.splice(index,1);
  }

  getIngredientes(): Observable<any> {
    return this.http.get<any>(`http://localhost:8080/ingredientes`)
      .pipe(map(response => {
          return response;
        })
      );
  }

  saveOrder(){
  }

}
