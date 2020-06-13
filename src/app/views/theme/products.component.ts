import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../services/product.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { Products } from '../models/product-item.model';
import Swal from 'sweetalert2'
import { DeleteRequest } from '../models/request-product-model';

@Component({
  templateUrl: 'products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ColorsComponent implements OnInit, OnDestroy {
  products = new Products();
  requestDelete = new DeleteRequest();
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.refetch();
  }
  ngOnDestroy() { }

  refetch() {
    this.productService.getProductList().pipe(untilDestroyed(this)).subscribe(products => {
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
          this.refetch();
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
