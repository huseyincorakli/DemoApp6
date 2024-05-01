import { Injectable } from '@angular/core';
import { Product } from '../entities/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
private products:Product[]=[];


createProduct(product:Product){
  this.products.push(product)
}

 get readProduct():Product[]{
  console.log(this.products)
  return [...this.products];
}
}
