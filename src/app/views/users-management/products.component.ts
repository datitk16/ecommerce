import { ProductItem, Products } from './../models/product.model';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import Swal from 'sweetalert2'
import { DeleteRequest, SearchProductRequest } from '../models/product-request-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoriesService } from '../services/categories.service';
import { CategoryLevel1 } from '../models/categoryLevel1.model';
import { CategoryLevel2Request } from '../models/categoryLevel2-request.model';
import { CategoryLevel2 } from '../models/categoryLevel2.model';
import { plainToClass } from 'class-transformer';

@Component({
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit, OnDestroy {
  products: ProductItem[] = [];
  requestDelete = new DeleteRequest();
  requestSearch = new SearchProductRequest();
  productForm: FormGroup;
  categoryLevel1 = new CategoryLevel1();
  categoryLevel2 = new CategoryLevel2();
  categoryLeve2Request = new CategoryLevel2Request();
  isshowForm: boolean = false;
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      keyword: '',
      category: ''
    });

    this.categoriesService.getCategoryLevel1().subscribe((category) => {
      this.categoryLevel1 = category;
    });

    this.refresh();
  }
  ngOnDestroy() { }

  refresh() {
    this.productService.getProductList().pipe(untilDestroyed(this)).subscribe(products => {
      plainToClass(Products, products);
      this.products = products.items.filter(x => !x.authenticate);
    });

  }

  submit(data) {
    this.requestSearch.subject = data.keyword;
    this.productService.searchProduct(this.requestSearch).pipe(untilDestroyed(this)).subscribe(products => {
      this.products = products.items;
    });
  }

  deleteProduct(id) {
    Swal.fire({
      title: 'Xác nhận?',
      text: "Bạn muốn xóa sản phẩm!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Xóa!'
    }).then((result) => {
      if (result.value) {
        this.requestDelete.id = id;
        this.productService.deleteProduct(this.requestDelete).subscribe(() => {
          this.refresh();
        })
        Swal.fire(
          'Đã xóa!',
          'Bạn đã xóa sản phẩm này ra khỏi danh sách',
          'success'
        )
      }
    })
  }

  selectedCategoryLevel1(id) {
    this.categoryLeve2Request.cateLeve1Id = id;
    this.categoriesService.getCategoryLevel2(this.categoryLeve2Request).subscribe(category => {
      this.categoryLevel2 = category;
    })
  }

  toggleForm() {
    this.isshowForm = !this.isshowForm;
    this.refresh();
  }

}
