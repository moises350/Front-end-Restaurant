import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { 

  }

  salvar(dados : any){
    return this.http.post<any>('localhost:8080/orders', dados)
    .pipe(map(response => {
        if (response.status == 401 || response.status == 500 || response.status == 403) {
          //deu ruim
          return false;
        } else if (response.status == 200) {
          //deu bom
        }
      })
    );
  }

}
