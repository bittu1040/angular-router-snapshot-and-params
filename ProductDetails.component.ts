import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product',
  templateUrl: 'ProductDetails.component.html',
  styles: ['.product {background: cyan; } '],
})
export class ProductDetailComponent {
  productID: number;
  productID3: number;

  constructor(private route: ActivatedRoute) {
    this.productID = route.snapshot.params['id'];

    this.route.paramMap.subscribe(
      (params) => (this.productID3 = +params.get('id').toString())
    );
  }
}
