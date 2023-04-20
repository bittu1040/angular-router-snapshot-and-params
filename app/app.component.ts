import { Component } from '@angular/core';
import {Routes, Router} from '@angular/router';
class Product {
  id: number;
  description: string;
}
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedProduct: Product;


  products: Product[] = [
    { id: 1, description: "John" },
    { id: 2, description: "Paul" },
    { id: 3, description: "George" },
    { id: 4, description: "Ringo" }
  ];

  constructor(private _router: Router) { }

  onSelect(prod: Product): void {
    this.selectedProduct = prod;
    this._router.navigate(["/product", prod.id]);
  }
}
