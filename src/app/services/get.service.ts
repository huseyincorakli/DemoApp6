import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetService {
  get(){
    return "Get Worked"
  }
  getAndConvert(){}
  getAndReplace(){}
}
