import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Products } from '../models/product-item.model';
import Swal from 'sweetalert2'
import { DeleteRequest, SearchRequest } from '../models/request-product-model';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ColorsComponent implements OnInit, OnDestroy {
  products = new Products();
  requestDelete = new DeleteRequest();
  requestSearch = new SearchRequest();
  productForm: FormGroup;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      keyword: '',
      category: ''
    });

    this.refresh();
  }
  ngOnDestroy() { }

  refresh() {
    this.productService.getProductList().pipe(untilDestroyed(this)).subscribe(products => {
      this.products = products;
    });
  }

  submit(data) {
    this.requestSearch.subject = data.keyword;
    this.productService.searchProduct(this.requestSearch).pipe(untilDestroyed(this)).subscribe(products => {
      this.products = products;
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
}
