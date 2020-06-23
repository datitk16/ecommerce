// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { TypographyComponent } from './typography.component';
import { ThemeRoutingModule } from './products-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateProductComponent } from './create-product/create-product.component';
import { NgxSpinnerModule } from 'ngx-spinner';
@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSpinnerModule
  ],
  declarations: [
    ProductsComponent,
    TypographyComponent,
    CreateProductComponent,
  ]
})
export class ThemeModule { }
