import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { HttpClient } from "@angular/common/http";
import { Observable, catchError, of } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  url: string = "assets/products.json";

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http
      .get<Product[]>(this.url)
      .pipe(catchError((error) => this.handleError(error, [])));
  }

  postProduct(product: Product): Observable<Object> {
    return this.http.post(`${this.url}/post`, product);
  }

  updateProduct(product: Product, id: string): Observable<Object> {
    return this.http.patch(`${this.url}/update/${id}`, product);
  }

  deleteProduct(id: number): Observable<Object> {
    return this.http.delete(`${this.url}/delete/${id}`)
}

  private handleError(error: Error, errorValue: any) {
    console.error(error);
    return of(errorValue);
  }
}
