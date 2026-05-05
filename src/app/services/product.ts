import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    { id: 1, name : "Computer", price : 2300, selected : true },
    { id: 2, name : "Printer", price : 1200, selected : false },
    { id: 3, name : "Smart Phone", price : 11000, selected : true },
  ]

  constructor(){}

  getAllProducts(){
    return this.products;
  }

  deleteProduct(products: any){
    this.products = this.products.filter( (p:any) => p.id != products.id );
  }
}
