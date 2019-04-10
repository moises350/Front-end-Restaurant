import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../models/ingredient.model';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  ingredients: Ingredient[] = [
    {
      id: 1,
      desc: 'Alface',
      valueMoney: 0.40
    },
    {
      id: 2,
      desc: 'Bacon',
      valueMoney: 2.00
    },

    {
      id: 3,
      desc: 'Hamburguer de Carne',
      valueMoney: 3.00
    },

    {
      id: 4,
      desc: 'Ovo',
      valueMoney: 0.80
    },

    {
      id: 5,
      desc: 'Queijo',
      valueMoney: 1.50
    }
  ]

  ingredients2: Ingredient[] = [];


  constructor() { }

  ngOnInit() {
    
  }

  addToOrder(ingredient)
  {
    this.ingredients2.push(ingredient);
  }

  removeOrder(index)
  {
    this.ingredients2.splice(index,1);
  }

}
