import { Component, OnInit } from '@angular/core';
import Product from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit{
  productsService: ProductsService;
  products: Product[] = [];

  toggler: boolean = false;

  constructor(productsService: ProductsService) {
    this.productsService = productsService;
  }
  ngOnInit(){
    this.productsService?.getAll().subscribe(
      (product: Product[]) => this.products = product, 
      (error) => console.log('empty data from service' + error)
    );
  }
}
