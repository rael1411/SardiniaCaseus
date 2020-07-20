import { Injectable } from '@angular/core';
import { Product } from "./product"
import { PRODUCTS } from "./products"
@Injectable({
  providedIn: 'root'
})
export class ProductService {
    getItems(): Product[] {
      return PRODUCTS;
    }
  constructor() { }
}
