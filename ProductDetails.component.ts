import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
class Product {
  id: number;
  description: string;
}
@Component({
  selector: 'product',
  templateUrl: 'ProductDetails.component.html',
  styles: ['.product {background: cyan; } '],
})
export class ProductDetailComponent implements OnInit {
  productID: number;
  productID3: string;
  currentURL: string;
  products: Product[] = [
    { id: 1, description: "John" },
    { id: 2, description: "Paul" },
    { id: 3, description: "George" },
    { id: 4, description: "Ringo" }
  ];


  resultProduct: any;
  constructor(private route: ActivatedRoute, private router: Router) {
    this.productID = route.snapshot.params.id;
    console.log("id from snapshot:  ", this.route.snapshot.params.id)

    this.route.paramMap.subscribe((params) => {
      this.productID3 = params.get('id')
    }
    );

    this.currentURL= this.router.url
    this.router.events.subscribe((val) => {
      this.currentURL = this.router.url; // Update the value when a different route is accessed
    });

    this.route.params.subscribe((parameter)=>{
      console.log(parameter)
      for (let i = 0; i < this.products.length; i++) {
        if (parameter.id==this.products[i].id) {
          this.resultProduct= this.products[i]
        }
      }
    })
  }



  ngOnInit(){

    }

  }


