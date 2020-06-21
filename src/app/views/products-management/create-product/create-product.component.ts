import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriesService } from '../../services/categories.service';
import { CategoryLevel1 } from '../../models/categoryLevel1.model';
import { CategoryLevel2Request } from '../../models/categoryLevel2-request.model';
import { CategoryLevel2 } from '../../models/categoryLevel2.model';
import { CatalogService } from '../../services/catalog.service';
import { Address } from '../../models/address.model';
import { Wards } from '../../models/ward.models';
import { CreateProductRequest } from '../../models/product-request-model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  @Input() categorylevel1;
  categoryLevel1 = new CategoryLevel1();
  createProductForm: FormGroup;
  categoryLevel2 = new CategoryLevel2();
  cities: Address[];
  wards: Wards[];
  productRequest: CreateProductRequest;
  private categoryLeve2Request = new CategoryLevel2Request();
  constructor(
    private fb: FormBuilder,
    private categoriesService: CategoriesService,
    private catalogService: CatalogService,
    private productService: ProductService
    // private customerService: CustomerService
  ) { }

  ngOnInit(): void {

    this.createProductForm = this.fb.group({
      category_id: '',
      category_id_2: '',
      city_id: '',
      ward_id: '',
      price_string: '',
      phone: '',
      body: '',
      subject: ''
    });

    this.categoryLevel1 = this.categorylevel1;

    this.catalogService.getCity().subscribe(city => {
      this.cities = city.LtsItem;
    });

  }

  selectedCategoryLevel1(id) {
    this.categoryLeve2Request.cateLeve1Id = id;
    this.categoriesService.getCategoryLevel2(this.categoryLeve2Request).subscribe(category => {

      this.categoryLevel2 = category;
    })
  }

  selectedCity(cityId) {
    this.catalogService.getWard(cityId).subscribe(wards => {
      this.wards = wards;
    });
  }

  submit(data) {
    this.productRequest = data;
    this.productService.createProduct(this.productRequest).subscribe(product => {
      console.log(product);
    });
  }

}
