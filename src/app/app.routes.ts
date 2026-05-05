import { Routes } from '@angular/router';
import { Home } from './home/home'
import { Products } from './products/products'

export const routes: Routes = [
  { path: "Home", component: Home },
  { path: "Products", component: Products }
];
