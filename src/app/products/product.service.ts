import { Injectable } from '@angular/core';
import { ProductModel } from './product-model';
import {PRODUCTS} from './product'

@Injectable()
export class ProductService {
    
   getProducts(): ProductModel[] {
       return PRODUCTS
   }
}