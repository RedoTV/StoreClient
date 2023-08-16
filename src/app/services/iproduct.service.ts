import { Product } from "../models/product";

export interface IProductsService{
    getAll():Product[];
    
}