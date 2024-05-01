import { Component } from '@angular/core';
import { GetService } from './services/get.service';

@Component({
  selector: 'app-root',
  template:`
  <app-services-lesson></app-services-lesson>
  {{title}}
  <hr>
  <h1>Component Communication with Services</h1>
  <app-product-create></app-product-create>
  <hr>
  <app-product-read></app-product-read>
  `
})
export class AppComponent {
  title = 'DemoApp6';
  
  constructor(private getService:GetService) {
   console.log(getService.get());
   
   
  }
}
