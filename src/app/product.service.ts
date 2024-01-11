import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _httpClient :HttpClient) { }
  showAddModal=false
  showDetailDialog=false
  
  getProductsList():Observable<Product[]>{
    return this._httpClient.get<Product[]>("http://localhost:3000/products")
  }
  getProductsByName(searchText:string):Observable<Product[]>{
    return this._httpClient.get<Product[]>("http://localhost:3000/products").pipe(
      map(products => products.filter(product => product.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())))
    )
  }

  getProductById(id:number):Observable<Product>{
    return this._httpClient.get<Product>(`http://localhost:3000/products/${id}`)
  }

  addProduct(product:Product):Observable<Product[]>{
    return this._httpClient.post<Product[]>("http://localhost:3000/products", product)
  }

  deleteProduct(product:Product):Observable<Product[]>{
    return this._httpClient.delete<Product[]>(`http://localhost:3000/products/${product.id}`)
  }

  updateProduct(id:number,product:Product):Observable<Product>{
    return this._httpClient.put<Product>(`http://localhost:3000/products/${product.id}`, product)
}
}
