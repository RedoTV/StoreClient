import { Injectable } from '@angular/core';
import { IProductsService } from './iproduct.service';
import Product from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable()
export class ProductsService implements IProductsService {
  private http:HttpClient;

  constructor(http:HttpClient) {
    this.http = http;
  }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:7002/product/getall');
  }
  
}