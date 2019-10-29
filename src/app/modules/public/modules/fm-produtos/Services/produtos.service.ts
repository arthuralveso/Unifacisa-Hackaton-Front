import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutosModel } from '../Models/produto.model';
import { Observable } from 'rxjs';


@Injectable()
export class ProdutosService {

  constructor(
    private http : HttpClient
  ) { }

  getProduto(): Observable<ProdutosModel[]> {
    return this.http.get<ProdutosModel[]>('http://localhost:3000/produtos');
  }
  createProduto(ProdutosModel){
    return this.http.post('http://localhost:3000/produtos', ProdutosModel);
  }
}

