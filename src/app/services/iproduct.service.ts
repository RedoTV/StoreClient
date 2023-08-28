import { Observable } from "rxjs";
import Product from "../models/product";
export interface IProductsService{
    getAll():Observable<Product[]>;
}