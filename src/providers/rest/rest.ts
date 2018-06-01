import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from "rxjs";


import "rxjs/add/operator/catch"
import {Product} from "../../interface/Product";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  baseUrl: string = "http://localhost:3000";

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  public getProducts(): Observable<Product[]> {
    return this.http.get(this.baseUrl + "/product")
      .map((products: Product[]) => {
        console.log(products);
        return products.map(product => {
          return new Product(product)
        });
      }).catch((err) => {
        console.error(err);
        return Observable.empty<Product[]>();
      });
  }

  public createProduct(product: Product): Observable<Product> {
    return this.http.post(this.baseUrl + "/product", product)
      .map(resp => {
        return new Product(resp);
      }).catch(err => Observable.empty<Product>());
  }

  public updateProduct(product: Product): Observable<Product> {
    console.log('=====updateProduct()');
    console.log(product.id);
    return this.http.put(this.baseUrl + "/product/" + product.id, product).map(resp => {
      return new Product(resp);
    }).catch((err) => {
      console.error(err);
      return Observable.empty<Product>();
    });
  }

  public deleteProductById(productId:number): Observable<Product>{
    return this.http.delete(this.baseUrl+ "/product/" + productId)
      .map(resp=>{
        return new Product(resp)
      }).catch((err)=>{
        console.error(err);
        return Observable.empty<Product>();
      })
  }

}
