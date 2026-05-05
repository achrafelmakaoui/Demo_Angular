import { Component, OnInit } from '@angular/core';
import { NgForOf, NgIf } from '@angular/common'
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true
})
export class Products implements OnInit{
  products : any;
  constructor(private productService : Product ) {

  }
  ngOnInit(){
    this.getAllProducts();
  }

  getAllProducts(){
    this.productService.getAllProducts().subscribe({
      next: (resp: any) => {
        this.products = resp;
        console.log(resp);
      },
      error: err => {
        console.log(err);
      }
    });
  }

  handelDelete(product: any){
    let v = confirm('etes vous sure de vouloir supprimer?');
    if(v==true){
      this.productService.deleteProduct(product).subscribe({
        next: value => {
          this.getAllProducts();
        },
        error: err => {
          console.log(err);
        }
      });
    }
  }
}
