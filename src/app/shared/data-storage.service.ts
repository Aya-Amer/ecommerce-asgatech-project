import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductService } from '../products/product.service';
import { Product } from '../products/product.model';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private productService: ProductService
  ) {}
  storeProducts() {
    const products = this.productService.getProducts();
    this.http
      .put(
        'https://ng-ecommerce-asgatech-project-default-rtdb.firebaseio.com/products.json',
        products
      )
      .subscribe((response) => {
        console.log(response);
      });
  }
  fetchProducts() {
    return this.http
      .get<Product[]>(
        'https://ng-ecommerce-asgatech-project-default-rtdb.firebaseio.com/products.json'
      )
      .pipe(
        tap((products) => {
          this.productService.setProducts(products);
        })
      );
  }
}
