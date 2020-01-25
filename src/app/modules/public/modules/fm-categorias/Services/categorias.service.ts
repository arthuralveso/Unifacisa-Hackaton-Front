import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CategoriasModel } from '../Models/categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  private readonly API = 'http://localhost:3000/categorias';

  constructor(
    private http : HttpClient
  ) { }

  getCategoria(): Observable<CategoriasModel[]> {
    return this.http.get<CategoriasModel[]>(this.API);
  }
  createCategoria(categoria){
    return this.http.post(this.API, categoria);
  }

  uptadeCategoria(categoria){
    return this.http.put(`${this.API}/${categoria.id}`, categoria);
  }

  deleteCategoria(id){
    return this.http.delete(`${this.API}/${id}`)
  }

  loadById(id){
    return this.http.get(`${this.API}/${id}`)
  }

}
