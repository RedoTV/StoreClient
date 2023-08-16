import { Injectable } from '@angular/core';
import { IProductsService } from './iproduct.service';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductsService implements IProductsService {
  http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
  }

  getAll(): Product[] {
    let prod: Product[] = [{name:'Orange',description:'orange Orange',cost:100}];
    return prod;
  }
  
}
