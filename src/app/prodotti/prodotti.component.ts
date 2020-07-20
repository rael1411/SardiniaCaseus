import { Component, OnInit } from '@angular/core';
import { Product } from "../product";
import { ProductService } from "../product.service"

@Component({
  selector: 'app-prodotti',
  templateUrl: './prodotti.component.html',
  styleUrls: ['./prodotti.component.css']
})
export class ProdottiComponent implements OnInit {

  constructor(private ProductService: ProductService) {}
  products: Product[];
  getProducts(): void {
    this.products = this.ProductService.getItems();
  }
  ngOnInit() {
    this.getProducts();
  }
}
