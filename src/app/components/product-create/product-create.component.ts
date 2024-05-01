import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/entities/product';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-create',
  template:`
  <h3>Create Component</h3>
  <form #frm ="ngForm" (ngSubmit)="CrateProduct(frm.value)">
  <input type="text" name="productName" placeholder="Product Name" ngModel> <br>
  <input type="number" name="productStock" placeholder="Product Stock" ngModel>  <br>
  <button>Create Product</button>
  </form>
  `
})
export class ProductCreateComponent {
  constructor(private productService:ProductServiceService){

  }
  CrateProduct(data){
    let newProduct:Product = new Product();
    newProduct.name=data.productName
    newProduct.stock=data.productStock
    this.productService.createProduct(newProduct);
    
  }
}
