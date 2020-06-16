// Angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsComponent } from './products.component';
import { TypographyComponent } from './typography.component';

// Theme Routing
import { ThemeRoutingModule } from './products-management-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ThemeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProductsComponent,
    TypographyComponent,

  ]
})
export class ThemeModule { }
