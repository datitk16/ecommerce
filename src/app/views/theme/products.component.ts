import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ProductService } from '../services/product.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Products } from '../models/product-item.model';

@Component({
  templateUrl: 'products.component.html'
})
export class ColorsComponent implements OnInit, OnDestroy {
  products = new Products();

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

    this.productService.getProductList().pipe(untilDestroyed(this)).subscribe(products => {
      this.products = products;
       console.log(products)
    });

  }
  ngOnDestroy() { }
}
