import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../../services/categories.service';
import { CategoryLevel1 } from '../../models/categoryLevel1.model';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CategoryLevel2 } from '../../models/categoryLevel2.model';
import { CategoryLevel2Request, CreateCategory2Request } from '../../models/categoryLevel2-request.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  categoryLevel1 = new CategoryLevel1();
  createProductForm: FormGroup;
  categoryLevel2 = new CategoryLevel2();
  createCategory2Request = new CreateCategory2Request();
  private categoryLeve2Request = new CategoryLevel2Request();
  constructor(
    private categoriesService: CategoriesService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.createProductForm = this.fb.group({
      cateLeve1Id: '',
      name: ''

    });

    this.categoriesService.getCategoryLevel1().subscribe((category) => {
      this.categoryLevel1 = category;
    });

  }

  submit(data) {
    this.createCategory2Request.cateLeve1Id = data.cateLeve1Id;
    this.createCategory2Request.name = data.name;
    this.categoriesService.createCategory2(this.createCategory2Request).subscribe(newCategory => {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Thêm danh mục mới thành công',
        showConfirmButton: false,
        timer: 1500
      });

      this.createProductForm.setValue({
        cateLeve1Id: '',
        name: ''
      });

    })
  }


}
