import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProdutosModel } from '../Models/produto.model';
import { Observable } from 'rxjs';


@Injectable()
export class ProdutosService {

  private readonly API = 'http://localhost:3000/produtos';

  constructor(
    private http : HttpClient
  ) { }

  getProduto(): Observable<ProdutosModel[]> {
    return this.http.get<ProdutosModel[]>(this.API);
  }
  createProduto(ProdutosModel){
    return this.http.post(this.API, ProdutosModel);
  }

  deleteProduto(id){
    return this.http.delete(`${this.API}/${id}`);
  }

  updateProduto(produto){
    return this.http.put(`${this.API}/${produto.id}`, produto)
  }

  loadById(id){
    return this.http.get(`${this.API}/${id}`);
  }

}

