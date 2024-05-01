import { Component } from '@angular/core';
import { ProductServiceService } from 'src/app/services/product-service.service';

@Component({
  selector: 'app-product-read',
  template:`
  <h3>Create Component</h3>
  <ul>
    <li *ngFor="let product of productService.readProduct">{{product.name}} | {{product.stock}}</li>
  </ul>
  `
})
export class ProductReadComponent {
constructor(public productService:ProductServiceService){

}
}
