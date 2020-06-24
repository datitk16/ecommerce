import { Component, OnInit } from '@angular/core';
import { ProductItem, Products } from '../../models/product.model';
import { DeleteRequest, SearchProductRequest } from '../../models/product-request-model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryLevel1 } from '../../models/categoryLevel1.model';
import { CategoryLevel2, CategoryLevel2Item } from '../../models/categoryLevel2.model';
import { CategoryLevel2Request } from '../../models/categoryLevel2-request.model';
import { ProductService } from '../../services/product.service';
import { CategoriesService } from '../../services/categories.service';
import { plainToClass } from 'class-transformer';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  productForm: FormGroup;
  categoryLevel1 = new CategoryLevel1();
  categoryLevel2 = new CategoryLevel2();
  categoryLeve2Request = new CategoryLevel2Request();
  isshowForm: boolean = false;
  categoryValue = new CategoryLevel2Item()
  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
  ) { }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      keyword: '',
      category: ''
    });

    this.categoriesService.getCategoryLevel1().subscribe((category) => {
      this.categoryLevel1 = category;
    });

  }
  ngOnDestroy() { }

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
        this.categoriesService.deleteCategory(id).subscribe(() => {
          window.location.reload();
        })
        Swal.fire(
          'Đã xóa!',
          'Bạn đã xóa sản phẩm này ra khỏi danh sách',
          'success'
        );
      }
    });
  }

  selectedCategoryLevel1(id) {
    this.categoryLeve2Request.cateLeve1Id = id;
    this.categoriesService.getCategoryLevel2(this.categoryLeve2Request).subscribe(category => {
      this.categoryLevel2 = category;
    })
  }

  toggleForm() {
    this.isshowForm = !this.isshowForm;
  }

  editCategory(value) {
    this.categoryValue = value;
  }

  submitNewCategory(newcategory) {
    this.categoriesService.updateCategory(newcategory[0], newcategory[1]).subscribe(newcategory => {
      window.location.reload();
    })
  }

}
