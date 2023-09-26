import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpclient:HttpClient) { }


  getAllProduect(){
   return this.httpclient.get('https://fakestoreapi.com/products')
  }

  getAllcategories(){
    return this.httpclient.get('https://fakestoreapi.com/products/categories')
  }

  getByName(keyword:any){
    return this.httpclient.get('https://fakestoreapi.com/products/category/'+keyword)
  }

  getByIdProduect(id:any){
    return this.httpclient.get('https://fakestoreapi.com/products/'+id)

  }

}
